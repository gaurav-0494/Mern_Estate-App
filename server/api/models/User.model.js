import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
    avatar: {
        type: String,
        default: "https://www.google.co.in/url?sa=i&url=https%3A%2F%2Fwww.istockphoto.com%2Fphotos%2Fempty-profile-picture&psig=AOvVaw1x4p-TeEbCcECk1FIZHMT7&ust=1710999884817000&source=images&cd=vfe&opi=89978449&ved=0CBIQjRxqFwoTCPiElbeRgoUDFQAAAAAdAAAAABAR",
    },
}, {timestamps: true});

const User = mongoose.model('User', userSchema);

export default User;