<template>
  <div v-theme:column="'wide'" id="Home">
    <b-container class="bv-example-row">
      <b-row>
        <b-col sm="6" offset="3">
          <div class="question-box-container">
            <b-container fluid>
              <b-row class="my-1">
                <label for="input-default">Search Student by Roll NUmber</label>
                <b-col sm="10">
                  <b-form-input
                    v-on:keyup.enter="fetchRepos"
                    id="input-default"
                    placeholder="Search user e.g. suardihaidar"
                    v-model="rollnumber"
                  ></b-form-input>
                </b-col>
                <b-button v-on:click="fetchRepos">Search</b-button>
              </b-row>
            </b-container>

            <b-container>
              <b-list-group-item v-for="data in userData" v-bind:key="data.fNmae">
                <b-button block variant="light">
                  <p>First Name: {{data.fName}}</p>
                  <p>Last Name: {{data.lName}}</p>
                  <p>Degree: {{data.degree}}</p>
                  <p>Grad_year :{{data.grad}}</p>
                  <p>CGPA :{{data.cgpa}}</p>
                </b-button>
              </b-list-group-item>
            </b-container>
          </div>
          <!-- <add-student> -->
        </b-col>
      </b-row>
    </b-container>




  </div>
</template>

<script>
/* eslint-disable */
import axios from "axios";
export default {
  data() {
    return {
      userData: [],
      rollnumber: "",
      isActive: false
    };
  },

  methods: {
    fetchRepos() {
      axios
        .get(`http://localhost:8082/api/students/${this.rollnumber}`)
        .then(response => {
          this.userData = response.data;
          console.log(this.userData);
        })
        .catch(err => {
          this.rollnumber = "";
          console.log(err);
        });
    }
  }
};
</script>

<style>
#Home {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>