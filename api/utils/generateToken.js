const jwt = require("jsonwebtoken");

const generateToken = (id) => {
    return jwt.sign({ id }, "sdsda454tgfss", {
        expiresIn: "30d"
    });
};

module.exports = generateToken;