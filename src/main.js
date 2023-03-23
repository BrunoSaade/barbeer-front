import { createApp } from 'vue'
import App from './App.vue'
import routes from './routes'
import './assets/main.css'
import store from './store'

/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/* import specific icons */
import { faUserSecret, faUser, faLock } from '@fortawesome/free-solid-svg-icons'

/* add icons to the library */
library.add(faUserSecret, faUser, faLock)


createApp(App)
    .use(store)
    .use(routes)
    .component('icon', FontAwesomeIcon)
    .mount('#app')



