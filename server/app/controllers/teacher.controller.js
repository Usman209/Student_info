const db = require("../models");
const Teacher = db.teachers;

// Create and Save a new Teacher
exports.create = (req, res) => {
    // Validate request
    if (!req.body.teacherName) {
        res.status(400).send({
            message: "Content can not be empty!"
        });
        return;
    }

    // Create a Teacher
    const teacher = new Teacher({
        teacherName: req.body.teacherName,
    });

    // Save Teacher in the database
    teacher
        .save(teacher)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred while creating the Teacher."
            });
        });
};

// Retrieve all Teachers from the database.
exports.findAll = (req, res) => {
    const title = req.query.title;
    var condition = title ? {
        title: {
            $regex: new RegExp(title),
            $options: "i"
        }
    } : {};

    Teacher.find(condition)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred while retrieving teachers."
            });
        });
};

// Find a single Teacher with an id
exports.findOne = (req, res) => {
    const id = req.params.id;

    Teacher.findById(id)
        .then(data => {
            if (!data)
                res.status(404).send({
                    message: "Not found Teacher with id " + id
                });
            else res.send(data);
        })
        .catch(err => {
            res
                .status(500)
                .send({
                    message: "Error retrieving Teacher with id=" + id
                });
        });
};

// Update a Teacher by the id in the request
exports.update = (req, res) => {
    if (!req.body) {
        return res.status(400).send({
            message: "Data to update can not be empty!"
        });
    }

    const id = req.params.id;

    Teacher.findByIdAndUpdate(id, req.body, {
            useFindAndModify: false
        })
        .then(data => {
            if (!data) {
                res.status(404).send({
                    message: `Cannot update Teacher with id=${id}. Maybe Teacher was not found!`
                });
            } else res.send({
                message: "Teacher was updated successfully."
            });
        })
        .catch(err => {
            res.status(500).send({
                message: "Error updating Teacher with id=" + id
            });
        });
};

// Delete a Teacher with the specified id in the request
exports.delete = (req, res) => {
    const id = req.params.id;

    Teacher.findByIdAndRemove(id, {
            useFindAndModify: false
        })
        .then(data => {
            if (!data) {
                res.status(404).send({
                    message: `Cannot delete Teacher with id=${id}. Maybe Teacher was not found!`
                });
            } else {
                res.send({
                    message: "Teacher was deleted successfully!"
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Could not delete Teacher with id=" + id
            });
        });
};

// Delete all Teachers from the database.
exports.deleteAll = (req, res) => {
    Teacher.deleteMany({})
        .then(data => {
            res.send({
                message: `${data.deletedCount} Teachers were deleted successfully!`
            });
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred while removing all teachers."
            });
        });
};

// Find all published Teachers
exports.findAllPublished = (req, res) => {
    Teacher.find({
            published: true
        })
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred while retrieving teachers."
            });
        });
};
