import app from "./app.js";

const PORT = 3000 || process.env.PORT;
// Creating server and setting the port
// Though no env. file yet
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
