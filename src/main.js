import Vue from 'vue'
import App from './App.vue'
import store from './store'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'
import VueMaterial from 'vue-material'
import 'vue-material/dist/vue-material.min.css'
import './registerServiceWorker'

Vue.use(Vuetify)
Vue.use(VueMaterial)
Vue.config.productionTip = false


new Vue({
    store,
    render: h => h(App)
}).$mount('#app')
