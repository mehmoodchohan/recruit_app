module.exports = (app, lib) => {
  var router = app.Router();
  let User = lib.User;
  const { celebrate, Joi } = require("celebrate");
  const authenticated =  require('../middlewares/authenticated')

  // Register User Account
  router.post(
    "/register",
    celebrate({
      body: Joi.object().keys({
        firstName: Joi.string().required(),
        lastName: Joi.string().required(),
        address: Joi.string().required(),
        email: Joi.string().required(),
        password: Joi.string().min(8).required(),
      }),
    }),
    async (req, res) => {
      console.log(req.body);
      User.RegisterNewUser(req,res)

    }
  );

  // Verify User Account
  router.get("/verify/:_id", async (req, res) => {
    try {
      let data = await User.VerifyNewUser(req,res);
    } catch (error) {
        console.log(error)
     throw error
    }
  });

  // Forget Password
  
  //  User Login
  router.post("/login", async (req, res) => {
    try {
      await User.logInUser(req,res);
    } catch (error) {
      throw error
    }
  });

  //  edit user profile data
  router.post("/userProfile",authenticated, async (req, res) => {
    try {
      let mydata= await User.MyProfile(req.user._id);
      console.log(mydata)
      res.status(200).json(mydata)
  
    } catch (error) {
      throw error
    }
  });


  

  router.post("/logout", async (req, res) => {
    try {
  
     
    } catch (error) {
    
    }
  });

  return router;
};
