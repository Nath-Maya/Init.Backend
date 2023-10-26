import passport from "passport";
import local from "passport-local";
import userModel from "../models/Users.model.js";
import { createHash, isValidPassword } from "../utils.js";

//! INIT STRATEGY

const LocalStrategy = local.Strategy;
//Inicializo milddware
const initializedPassport = () => {
  passport.use(
    "register",
    new LocalStrategy(
      { passReqToCallback: true, usernameField: "email" },
      async (req, username, password, done) => {
        //Validar como entramos a estos datos

        const { first_name, last_name, email, age } = req.body;
        try {
          let user = await userModel.findOne({ email: username });

          if (user) {
            console.log("User already exist");
            const newUser = {
              first_name,
              last_name,
              email,
              age,
              password: createHash(password),
            };
            let result = await userModel.create(user);
            return done(null, result);
          }
        } catch (error) {
          return done("Error usuario " + error);
        }
      }
    )
  );

  //Se quita responsabilidades al router de validar datos. 
  passport.serializeUser((user, done) => {
    done(null, user.id);
  });

  passport.deserializeUser(async (id, done) => {
    let user = await userModel.findById(id);
    done(null, user);
  });
};

export default initializedPassport;
