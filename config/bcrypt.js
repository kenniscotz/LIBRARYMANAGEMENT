import bcrypt from "bcrypt";

// ideally the docs recommends 10rounds
const saltRounds = 10;

export const hashedPassword = (passwords) => {
  const mySaltedPassword = bcrypt.genSaltSync(saltRounds);
  return bcrypt.hashSync(passwords, mySaltedPassword);
};

export const comparePassword = (password, hashedPassword) => {
  return bcrypt.compare(password, hashedPassword);
};
