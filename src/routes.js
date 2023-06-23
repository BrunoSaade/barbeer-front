import Home from './views/Home.vue';
import Register from './views/Register.vue';
import Main from './views/logged/Main.vue';
import Profile from './views/logged/Profile.vue';
import Booking from './views/logged/Booking.vue';

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
    {
        path: '/logged/profile',
        component: Profile,
    },
    {
        path: '/logged/booking',
        component: Booking,
    },
]