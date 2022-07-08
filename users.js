const { v4: uuid } = require("uuid");
const joi = require("joi");
const User = require("../models/User");


const getUsers = async (req, res) => {
	const { loginSubstring = "", limit = 10 } = req.query;
	const users = await User.findAll();
	const list = users.filter(user => user.login.includes(loginSubstring) && !user.isDeleted).sort((a, b) => a.login.localeCompare(b.login)).slice(0, limit);

	return res.status(200).json(list);
};

const createUser = async (req, res) => {   
	const {login, password, age, isDeleted } = req.body;

	try {
		const value = await userValidation().validateAsync({login,password,age,isDeleted});

		await User.create({ id: uuid(), ...value});

		return res.status(200).json({message: "User added successfully"});

	} catch(err) {
		return res.status(400).json(err);
	}

};

const getUser = async (req, res) => {
	const { id } = req.params;
	try {
		const user = await User.findByPk(id);
		if(user) {
			return res.status(200).json(user);
		}
		else {
			return res.status(400).json({message: "User not found"});
		}

	} catch (err) {
		throw new Error(err);
	} 
	
};

const deleteUser = async (req, res) => { 
	const { id } = req.params;
	
	try {
		const deleted = await User.update({
			isDeleted: true,
		}, {
			where: {
				id,
				isDeleted: false,
			},
		});
		if(!deleted[0]) {
			return res.status(404).json({ "error": "User does not exist" });
		}
		else {
			return res.status(200).json({message: "User deleted successfully"});
		}
	} catch (error) {
		return res.status(400).json(error);
	}
 
};

const updateUser =  async (req,res) => {

	try {
		const { login, password, age } = req.body;
		const user = await User.findByPk(req.params.id);

		if(!user) {
			return res.status(400).json({message: "User not found"});
		}
		const value = await userValidation().validateAsync({login,password,age});
	
		if(value) {
			user.login = login;
			user.password = password;
			user.age = age;

			await user.save();
			
			return res.status(200).json({message: "User updated successfully"});
		}
	} catch(err) {
		return res.status(400).json({message : "Something went wrong"});
	}
	
};

const userValidation = () => {
	const user = joi.object({
		login: joi.string().email({ minDomainSegments: 2, tlds: { allow: ["com", "net"] } }).required(),

		password: joi.string().pattern(new RegExp("^[a-zA-Z0-9]{3,30}$")).required(),

		age: joi.number().integer().min(4).max(130).required(),

		isDeleted: joi.boolean()
	});
	return user;
};

module.exports = {getUsers,getUser,createUser,deleteUser,updateUser};