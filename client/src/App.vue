<template>

  <div id="app">
<nav>
    <ul>
   <li> <router-link to="/">Home</router-link></li>
   <li> <router-link to="/addStudent">Add New Student</router-link></li>
    </ul>
  </nav>
  <router-view/>
    <!-- <Home/> -->
    <!-- <addStudent/> -->
  </div>
</template>

<script>
import Home from './components/Home.vue'
import addStudent from './components/addStudent.vue'




export default {
  name: 'App',
  components: {
    Home,
   addStudent,
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

ul{
    list-style-type: none;
    text-align: center;
    margin: 0;
}
li{
    display: inline-block;
    margin: 0 10px;
}
a{
    color: #fff;
    text-decoration: none;
    padding: 6px 8px;
    border-radius: 10px;
}
nav{
    background: #444;
    padding: 14px 0;
    margin-bottom: 40px;
}
.router-link-active{
    background: #eee;
    color: #444;
}
</style>
<style scoped>
ul{
    list-style-type: none;
    text-align: center;
    margin: 0;
}
li{
    display: inline-block;
    margin: 0 10px;
}
a{
    color: #fff;
    text-decoration: none;
    padding: 6px 8px;
    border-radius: 10px;
}
nav{
    background: #444;
    padding: 14px 0;
    margin-bottom: 40px;
}
.router-link-active{
    background: #eee;
    color: #444;
}

</style>
