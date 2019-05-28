import Vue from 'vue'
import Router from 'vue-router'
import Index from './views/index.vue'
import Hotel from './views/hotel.vue'
import Restaurant from './views/restaurant.vue'
import Picture from './views/picture.vue'
import AboutUs from './views/aboutus.vue'
import Contact from './views/contact.vue'
import NotFound from './views/notfound.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {path:"/",component:Index},
    {path:"/Index",component:Index},
    {path:"/Hotel",component:Hotel},
    {path:"/Restaurant",component:Restaurant},
    {path:"/Picture",component:Picture},
    {path:"/AboutUs",component:AboutUs},
    {path:"/Contact",component:Contact},
    {path:"*",component:NotFound},
  ]
})
