module.exports = mongoose => {
    var schema = mongoose.Schema({
        courseId: String,
        courseName: String,
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

    const Course = mongoose.model("course", schema);
    return Course;
};
