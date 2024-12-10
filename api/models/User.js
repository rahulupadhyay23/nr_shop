const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema(
    {
        name: {type: String, require: true},
        email: {type: String, require: true, unique: true},
        description: {type: String, require: true},
        isAdmin: {type: Boolean, default: false}
    }, 
    {
        timestamps: true
    }
)

module.exports = mongoose.model("User", UserSchema);