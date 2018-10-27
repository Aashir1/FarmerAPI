let mongoose = require('../../dbConfig')

const userSchema = mongoose.Schema({
    firstName: {
        type: String,
        trim: true,
        required: [true, 'First name is required'],
        minlength: 3
    },
    lastName: {
        type: String,
        trim: true,
        required: [true, 'Last name is required'],
        minlength: 3
    },
    name: {
        type: String,
        trim: true,
        required: [true, 'User name is required'],
        // minlength: 3
    },
    type: {
        type: String,
        trim: true,
        require: [true, 'Type must be required']
    },
    email: {
        type: String,
        trim: true,
        required: true,
        unique: [true, 'This email taken by another account']
    },
    password: {
        type: String,
        trim: true,
        required: true,
        minlength: 6
    },
    createdAt: {
        type: Date,
        default: Date.now()
    }
});

const UserModel = mongoose.model('UserModel', userSchema);

module.exports = UserModel;