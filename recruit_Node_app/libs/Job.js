module.exports = (modals) => {
  const Jobs = modals.Job;
  const dbQuery = require("../modules/db_Quries");
  return {
    AddNewJob: async (req, res) => {
      try {
        console.log(req.body);
        const data = await dbQuery.Create(Jobs, req.body);
        return data;
      } catch (error) {
        throw error;
      }
    },

    getMyListing: async (id) => {
      try {
        const data = await dbQuery.Get(Jobs, { employerid: id });
        return data;
      } catch (error) {
        throw error;
      }
    },

    deletejob: async (id) => {
      try {
        const data = await dbQuery.Delete(Jobs, { _id: id });
        return data;
      } catch (error) {
        throw error;
      }
    },
  };
};
