
const HTTPRESPONSE = require('../utils/httpResponses');
module.exports = {
    GetOne : async (modal, condition = {}) => {
        try {
            let result = await modal.findOne(condition);
            return result;
        } catch (error) {
            throw error
        }     
    },

    Get : async (modal, condition = {}) => {
        try {
            let result = await modal.find(condition);
            return result;
        } catch (error) {
            throw error
        }     
    },

    Create : async (modal, data) => {
        try {
            let result = await modal.create(data);
            return result;
        } catch (error) {
            throw error
        }     
    },

    Edit : async (modal, condition, data) => {
        try {

            let result = await modal.findOneAndUpdate(condition,
                data, {
                upsert: true,
                new: true
            })
            return result;
        } catch (error) {
            throw error
        }
    },

    Delete : async (modal, _id) => {
        try {
            let result = await modal.remove({_id});
            return result;
        } catch (error) {
            throw error
        }  
    }


}
