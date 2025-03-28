const mongoose = require("mongoose");

const verifySchema = new mongoose.Schema({
    email: {
        type: String,
    },
    username: {
        type: String,
        default: "your username"
    },
    fullname: {
        type: String,
    },
    city: {
        type: String,
        default: "your city"
    },
    gender: {
        type: String,
        default: "your gender"
    },
    dateofBirth: {
        type: String,
        default: "your dateofBirth"
    },
    marital: {
        type: String,
        default: "your marital"
    },
    age: {
        type: String,
        default: "your age"
    },
    address: {
        type: String,
        default: "your address"
    },
    images: [{ // Changed from 'image' to 'images' as an array
        type: String
    }],
    backImage: { // Still a single field, but can be an array if needed
        type: String
    },
    owner: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user'
    }
}, { timestamps: true });


const Verify = mongoose.model('verify', verifySchema);

module.exports = Verify;