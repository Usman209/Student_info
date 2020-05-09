module.exports = mongoose => {
    var schema = mongoose.Schema({
        fName: String,
        lName: String,
        rollNumber: String,
        degree: String,
        grad: String,
        cgpa:Number
    }, {
        timestamps: true
    });

    schema.method("toJSON", function () {
        const {
            __v,
            _id,
            ...object
        } = this.toObject();
        object.id = _id;
        return object;
    });

    const Student = mongoose.model("student", schema);
    return Student;
};
