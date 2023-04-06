import { createApp } from 'vue'
import App from './App.vue'
import routes from './routes'
import './assets/main.css'
import store from './store'

import VueMask from '@devindex/vue-mask'

import { createRouter, createWebHistory } from 'vue-router';

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faUserSecret, faUser, faLock, faArrowLeft, faXmark, faBars, faPen, faBook, faRightFromBracket } from '@fortawesome/free-solid-svg-icons'

library.add(faUserSecret, faUser, faLock, faArrowLeft, faXmark, faBars, faPen, faBook, faRightFromBracket)

const router = createRouter({
    history: createWebHistory(),
    routes,
})

createApp(App)
    .use(store)
    .use(router)
    .use(VueMask)
    .component('icon', FontAwesomeIcon)
    .mount('#app')



