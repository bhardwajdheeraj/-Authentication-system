import mongoose from "mongoose";    

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true, 
        unique: true,
        trim: true, },
    email: {
        type: String,  
        required: true,
        unique: true,
        trim: true,
    },
    password: {
        type: String,
        required: true,
        minlength: 6,
        trim: true,
    },
    profilePicture: {
        type: String,   
        default:'https://cdn.vectorstock.com/i/500p/37/34/user-profile-icon-social-media-vector-51113734.jpg',
    },
},{timestamps: true});

const User = mongoose.model("User", userSchema);

export default User;