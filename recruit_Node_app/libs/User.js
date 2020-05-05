module.exports = (modals) => {
  const User = modals.User;
  const Email = require("../utils/email");
  const dbQuery = require("../modules/db_Quries");
  const bcrypt = require("bcryptjs");
  const jwt = require("jsonwebtoken");

  return {
    RegisterNewUser: async (req, res) => {
      try {
        req.body.status = "unvarified";
        let user = req.body;
        let existingUser = await dbQuery.GetOne(User, {
          email: user.email,
        });
        if (existingUser)
          return res.status(409).json({
            message: "User already Exist.",
            description: "Please Use Another Email to Sign up",
          });
        const newUser = new User(user);

        bcrypt.genSalt(10, (err, salt) => {
          bcrypt.hash(newUser.password, salt, (err, hash) => {
            if (err) throw err;
            newUser.password = hash;
            newUser.conformPassword = hash;

            newUser.save().then(async (user) => {
              user.password = undefined;
              const resetURL = `${req.protocol}://localhost:3000/register/verify/${user._id}`;
              let msg = {};
              msg.to = user.email;
              msg.from = "support@recruit.com";
              msg.subject = "Please Verify Your Account";
              msg.text = `${req.protocol}://localhost:3000/verify/${user._id} `;
              await Email.send(msg, () => {
                console.log(
                  `Your Email Submitted Successfully at ${msg.to} From ${msg.from}`
                );
              });
              res.status(200).json({
                message: "Please Verify Account! And Check Email.",
              });
            });
          });
        });
      } catch (error) {
        throw error;
      }
    },

    VerifyNewUser: async (req, res) => {
      try {
        const user = await User.findOne({
          _id: req.params._id,
        });

        if (!user || user === null) {
          return res.status(403).json({
            message: "User Does not Exit.",
          });
        }
        user.status = "active";
        user.save().then((user) => {
          let msg = {};
          msg.to = user.email;
          msg.from = "support@recruit.com";
          msg.subject = "Account Registered Successfully";
          msg.text = `Hello ${user.firstName} Your Account Successfully Created at Flipeet. `;
          Email.send(msg, () => {
            console.log(
              `Your Email Submitted Successfully at ${msg.to} From ${msg.from}`
            );
          });
          user.password = undefined;
          user.conformPassword = undefined;
          res.status(200).json({
            message: "Your Account is Activated! Now You Can Login",
            user,
          });
        });
      } catch (error) {
        throw error;
      }
    },

    logInUser: async (req, res) => {
      try {
        const { email, password } = req.body;
        User.findOne({
          email: email,
        }).then((user) => {
          if (!user)
            return res.status(403).json({
              message: "User Does not Exit.",
            });

          bcrypt.compare(password, user.password).then((isMatch) => {
            if (!isMatch)
              return res.status(400).json({
                message: "Invalid Credentials..!",
              });
            jwt.sign(
              {
                user,
              },
              "asdlhsjlkahsdjflkhsdjflaskhsdjflakhjflkhsdjfkd",
              (err, token) => {
                if (err) throw err;
                user.password = undefined;
                user.conformPassword = undefined;
                res.json({
                  token,
                  message: "Your are Loggedin  Successfully",
                  user: {
                    id: user.id,
                    firstName: user.firstName,
                    lastName: user.lastName,
                    email: user.email,
                    accountType: user.accountType,
                    tickets: user.tickets,
                    status: user.status,
                    role: user.role,
                  },
                });
              }
            );
          });
        });
      } catch (error) {
        throw error;
      }
    },

    MyProfile: async (id) => {
      try {
        const res = await dbQuery.GetOne(User, { _id: id });
        return res;
      } catch (error) {
        throw error;
      }
    },
  };
};
