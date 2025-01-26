import passport from "passport";
import { Strategy } from "passport-local";
import userModel from "../src/model/userModel.js";
import bcrypt from "bcrypt";
import { hashedPassword, comparePassword } from "../config/bcrypt.js";

export default passport.use(
  new Strategy({ usernameField: "email" }, (username, password, done) => {
    try {
      const findUser = userModel.findOne(
        (user) => user.username === usernameField
      );
      if (!findUser) throw new Error("User not found");
      const isValidPassword = bcrypt.compareSync(password, findUser.password);
      if (!isValidPassword) throw new Error("Invalid password");
      done(null, findUser);
    } catch (error) {
      done(error, null);
    }
  })
);
