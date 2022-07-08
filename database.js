const Sequelize = require("sequelize");
const myDB = new Sequelize("user_detail", "postgres", "ritik@12345", { 
	host : "localhost",
	dialect : "postgres" 
});

const validate = async () => {
	try {
		await myDB.authenticate();
		console.log("Connection has been established successfully.");
	} catch (error) {
		console.error("Unable to connect to the database:", error);
	}
};

validate();

module.exports = myDB;
