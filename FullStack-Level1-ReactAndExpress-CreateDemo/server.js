//Create a server
const express = require("express");
const app = express();

// Set up Middlewares
app.use(express.json());
app.use(express.urlencoded({ extened: true }));
const morgan = require("morgan");
app.use(morgan("dev"));

//Just a test for the server
app.get("/api/students", (req, res) => {
  const students = [
    { id: 1, firstName: "Captain", lastName: "fancy" },
    { id: 2, firstName: "John", lastName: "Jordan" },
    { id: 3, firstName: "James", lastName: "Harden" }
  ];
  res.json(students);
});

//Set up Server Port
const port = 4000;
const server = app.listen(port, () => {
  console.log(
    `Port ${port} is listening =======================================>`
  );
});
