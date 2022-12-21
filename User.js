const { DataTypes } = require("sequelize");
const myDB = require("../config/database");

const User = myDB.define("users", {
	id: {
		type: DataTypes.UUID,
		primaryKey: true,
		unique: true,
	},
	login: {
		type: DataTypes.STRING,
		allowNull: false,
	},
	password: {
		type: DataTypes.STRING,
		allowNull: false,
	},
	age: {
		type: DataTypes.INTEGER,
		allowNull: false,
	},
	isDeleted: {
		type: DataTypes.BOOLEAN,
		defaultValue: false,
	},

},
{
	tableName: "users"
}
);

User.sync()
	.then(() => {
		console.log("✔ User table created if not...");
	})
	.catch((error) => {
		console.log("❌ something went wrong while created User table...", error);
	});

module.exports = User;