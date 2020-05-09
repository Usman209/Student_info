<template>
  <div id="addStudent">
    <h2>Add New Student</h2>
    <form v-if="!submitted">
      <label>First Name</label>
      <input type="text" v-model.lazy="student.fName" required />
      <label>Last Name</label>
   <input type="text" v-model.lazy="student.lName" required />
 <label>Roll Number</label>
<input type="text" v-model.lazy="student.rollNumber" required />

      <label>Grad Year:</label>
       <input type="text" v-model.lazy="student.grad" required />

       <label>Degree:</label>

    <select v-model="student.degree">

  <option v-for="degree in degree" :key="degree"> {{ degree }}</option>
</select>

<p>

</p>
<p>
    <input type="text" v-model="student.grad">
    <!-- {{student.grad}} -->
  </p>



      <button v-on:click.prevent="post1">Add Studet</button>
    </form>




    <div v-if="submitted">
      <h3>Student Added Successfully</h3>
    </div>
  </div>
</template>

<script>
// import axios from 'axios'
export default {
  data() {
    return {
      student: {
        fName: "",
        lName: "",
        rollNumber:"",
        degree:"",
        grad:"",
        type: [],
        author: "",
      },
      degree: ["BSCS", "MBA", "MBBS","CSS"],
      submitted: false,
    };
  },
  methods: {
    post1: function() {
      this.$http
        .post("http://localhost:8082/api/students", {
          fName: this.student.fName,
          lName: this.student.lName,
          rollNumber:this.student.rollNumber,
          degree:this.student.degree,
          grad:this.student.grad,
          userId: 1,
        })
        .then(function(data) {
          console.log(data);
          this.submitted = true;
        });
    },




  }
};
</script>
<style>
#addStudent * {
  box-sizing: border-box;
}
#addStudent {
  margin: 20px auto;
  max-width: 500px;
}
label {
  display: block;
  margin: 20px 0 10px;
}
input[type="text"],
textarea {
  display: block;
  width: 100%;
  padding: 8px;
}
#preview {
  padding: 10px 20px;
  border: 1px dotted #ccc;
  margin: 30px 0;
}
h3 {
  margin-top: 10px;
}
#checkboxes input {
  display: inline-block;
  margin-right: 10px;
}
#checkboxes label {
  display: inline-block;
}
</style>
