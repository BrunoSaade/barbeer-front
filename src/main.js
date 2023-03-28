import { createApp } from 'vue'
import App from './App.vue'
import routes from './routes'
import './assets/main.css'
import store from './store'

import { createRouter, createWebHistory } from 'vue-router';

/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'
/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
/* import specific icons */
import { faUserSecret, faUser, faLock, faArrowLeft } from '@fortawesome/free-solid-svg-icons'
/* add icons to the library */
library.add(faUserSecret, faUser, faLock, faArrowLeft)

const router = createRouter({
    history: createWebHistory(),
    routes,
})



createApp(App)
    .use(store)
    .use(router)
    .component('icon', FontAwesomeIcon)
    .mount('#app')



