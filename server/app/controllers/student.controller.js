const db = require("../models");
const Student = db.students;

// Create and Save a new Student
exports.create = (req, res) => {
    // Validate request
    if (!req.body.fName) {
        res.status(400).send({
            message: "Content can not be empty!"
        });
        return;
    }

    // Create a Student
    const student = new Student({
        fName: req.body.fName,
        lName: req.body.lName,
        rollNumber: req.body.rollNumber,
        degree: req.body.degree,
        grad: req.body.grad,
        cgpa: req.body.cgpa ? req.body.cgpa : 4
    });

    // Save Student in the database
    student
        .save(student)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred while creating the Student."
            });
        });
};

// Retrieve all Students from the database.
exports.findAll = (req, res) => {
    console.log('here')
    const fName = req.query.fName;
    var condition = fName ? {
        fName: {
            $regex: new RegExp(fName),
            $options: "i"
        }
    } : {};

    Student.find(condition)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred while retrieving students."
            });
        });
};



// Find a single Student with an id
exports.findOne = function (request, response) {
    // res.setHeader('Access-Control-Allow-Origin', 'http://localhost:8083');

    Student.find({
        rollNumber: request.params.rollNumber
    }, function (err, student) {
        if (err) {
            console.log("Error in fetching single item of hero ", err);
            throw err;
        }
        response.json(student);
    })
},




// Update a Student by the id in the request
exports.update = (req, res) => {
    if (!req.body) {
        return res.status(400).send({
            message: "Data to update can not be empty!"
        });
    }

    const id = req.params.id;

    Student.findByIdAndUpdate(id, req.body, {
            useFindAndModify: false
        })
        .then(data => {
            if (!data) {
                res.status(404).send({
                    message: `Cannot update Student with id=${id}. Maybe Student was not found!`
                });
            } else res.send({
                message: "Student was updated successfully."
            });
        })
        .catch(err => {
            res.status(500).send({
                message: "Error updating Student with id=" + id
            });
        });
};

// Delete a Student with the specified id in the request
exports.delete = (req, res) => {
    const id = req.params.id;

    Student.findByIdAndRemove(id, {
            useFindAndModify: false
        })
        .then(data => {
            if (!data) {
                res.status(404).send({
                    message: `Cannot delete Student with id=${id}. Maybe Student was not found!`
                });
            } else {
                res.send({
                    message: "Student was deleted successfully!"
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Could not delete Student with id=" + id
            });
        });
};

// Delete all Students from the database.
exports.deleteAll = (req, res) => {
    Student.deleteMany({})
        .then(data => {
            res.send({
                message: `${data.deletedCount} Students were deleted successfully!`
            });
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred while removing all students."
            });
        });
};

// Find all published Students
exports.findAllPublished = (req, res) => {
    Student.find({
            published: true
        })
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred while retrieving students."
            });
        });
};
