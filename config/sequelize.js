import { Sequelize } from "sequelize";

// sequelize set-up
const sequelize = new Sequelize("LIBRARYMGT", "postgres", "12345678", {
  host: "localhost",
  dialect: "postgres",
});

try {
  sequelize.authenticate();
  console.log("dB is connected");
} catch (err) {
  console.log("Error");
}
export default sequelize;
