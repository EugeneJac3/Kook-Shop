module.exports = (mongoose) => {
const User = mongoose.model(
    "user",
    mongoose.Schema(
        {
            email: String,
            password: String,
        }
        // {contoller: model}
    )
);
return User;

}