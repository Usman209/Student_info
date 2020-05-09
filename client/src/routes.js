import addStudent from './components/addStudent.vue'
import Home from './components/Home.vue';
import Vue from 'vue'
import VueRouter from 'vue-router'


Vue.use(VueRouter)

const routes = [
    {
            path: '/',
            name: 'Home',
            component: Home
        },
        {
            path: '/addStudent',
            name: 'addStudent',
            component: addStudent
        }
]

    const router = new VueRouter({
        mode: 'history',
        routes
    })

export default router



// Vue.use(VueRouter);
//
// const routes = [{
        // path: "/",
        // name: "home",
        // component: Home
    // },
    // {
        // path: '/profile',
        // name: 'profile',
        // component: Profile
    // }
// ]
//
//




