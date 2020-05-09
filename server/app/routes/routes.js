module.exports = app => {
  const students = require("../controllers/student.controller.js");
  const teachers = require("../controllers/teacher.controller.js");
  const courses = require("../controllers/course.controller.js");


var router = require("express").Router();

// Student Routes

  router.post("/students", students.create)
  router.get("/students", students.findAll);
  router.get("/students/:rollNumber", students.findOne)



// teacher routes
  router.post("/teachers", teachers.create)

  // course routes

  router.post("/courses", courses.create)



  app.use("/api/"+"", router);

};
