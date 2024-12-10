const bcrypt = require("bcryptjs")

const users = [
    {
        name: "Admin",
        email: "admin@yopmail.com",
        password: bcrypt.hashSync("123456", 10),
        isAdmin: true
    },
    {
        name: "User",
        email: "user@yopmail.com",
        password: bcrypt.hashSync("123456", 10)
    }
];

module.exports = users;