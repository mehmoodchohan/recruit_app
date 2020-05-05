
module.exports = (mongoose) => {

    const Schema = mongoose.Schema;
    const jobs = new Schema({
        title: {
            type: String,
            required: true,
        },
        location: {
            type: String,
            required: true,
        },
        salary: {
            type: String,
        },
        experience : {
            type: String,
            required: true,
        },
        description: {
            type: String,
            required: true,
        },
        company : {
            type : String,
        },
        employerid: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "users"
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

    return mongoose.model('job', jobs);
};