import Home from './views/Home.vue';
import Register from './views/Register.vue';
import Main from './views/logged/Main.vue';
export default [
    {
        path: '/',
        component: Home,
    },
    {
        path: '/register',
        component: Register,
    },
    {
        path: '/logged/main',
        component: Main,
    },
]