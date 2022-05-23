const bcrypt = require("bcrypt");


module.exports = (mongoose) => {
const User = mongoose.model(
    "user",
    mongoose.Schema(
        {
            email:{
                type: String,
                required: [true, "Email is Required"],
                unique: true, 
            },
            password: {
                type: String,
                required: [true, "Password is Required"],
            },
        }
        
    )
);


return User;

}

