const jwt = require("jsonwebtoken");
const asynHandler = require("express-async-handler");
const User = require("../models/User");

const protect = asynHandler(async (req, res, next) => {
    let token;

    if (
        req.headers.authorization &&
        req.headers.authorization.startsWith("Bearer")
    ) {
        try {
            token = req.headers.authorization.split(" ")[1];

            const decoded = jwt.verify(token, "sdsda454tgfss");

            req.user = await User.findById(decoded.id).select("-password");

            next();
        }catch(error) {
            console.log(error);
            res.status(401);
            throw new Error("Not authorized, token failed")
        }
    }

    if(!token) {
        res.status(401);
        throw new Error("Not authorized, no token")
    }
})

module.exports = { protect }