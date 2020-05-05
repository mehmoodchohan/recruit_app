
module.exports = (mongoose) => {

    const Schema = mongoose.Schema;
    const usersSchema = new Schema({
        firstName: {
            type: String,
            required: true,
        },
        lastName: {
            type: String,
            required: true,
        },
        address: {
            type: String,
        },
        email : {
            type: String,
            required: true,
        },
        password: {
            type: String,
            required: true,
        },
        status : {
            type : String,
        },
        updatedAt: {
            type : Date,
            default : Date.now()
        },
        createdAt : {
            type : Date,
            default : Date.now()
        }
    });

    return mongoose.model('users', usersSchema);
};