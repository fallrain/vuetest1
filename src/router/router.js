import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Table from '@/components/Table'

Vue.use(Router);

export default new Router({
  mode : 'history',
  routes : [
    {
      path : '/',
      name : 'Hello',
      component : Table,
      /*components : {
        'Hello' : Hello,
        //'Table' : Table
      }*/
    }
  ]
})
