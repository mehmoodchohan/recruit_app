"use strict";
module.exports = (app, lib) => {
  var router = app.Router();
  let jobs = lib.Job;
  const authenticated = require("../middlewares/authenticated");
  // Create a new Shop

  router.post("/addjob", authenticated, async (req, res) => {
    try {
      req.body.employerid = req.user._id;
      const newjobs = await jobs.AddNewJob(req, res);
      if (newjobs)
        return res.status(200).json({ message: "Job Posted Successfully" });
    } catch (error) {
      throw error;
    }
  });

  router.post("/getmyjobs", authenticated, async (req, res) => {
    try {
      const newjobs = await jobs.getMyListing(req.user._id);
      if (newjobs) return res.status(200).json(newjobs);
    } catch (error) {
      throw error;
    }
  });

  router.post("/deletejob", authenticated, async (req, res) => {
    try {
      console.log(req.body);
      const newjobs = await jobs.deletejob(req.body.id);
      if (newjobs)
        return res.status(200).json({ message: "Job Deleted Successfully" });
    } catch (error) {
      throw error;
    }
  });

  return router;
};
