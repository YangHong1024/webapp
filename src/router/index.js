import Vue from 'vue'
import Router from 'vue-router'

import Index from '@/components/page/Index'
import Kind from '@/components/page/Kind'
import Me from '@/components/page/Me'
import Shopcar from '@/components/page/Shopcar'
import Login from '@/components/page/Login'
import Register from '@/components/page/Register'
import Facialskincare from '@/components/page/Facialskincare'
import AdressList from '@/components/page/AdressList'
import Mask from '@/components/page/Mask'
import BodyClean from '@/components/page/BodyClean'
import HairCair from '@/components/page/HairCair'
import ChineseGoods from '@/components/page/ChineseGoods'
import International from '@/components/page/International'
import Sunscreen from '@/components/page/Sunscreen'
import Help from '@/components/page/Help'
import category from '@/components/page/category'
import AboutUs from '@/components/page/AboutUs'
import Good from '@/components/page/Good'
Vue.use(Router)

export default new Router({
  routes: [{
    path: '/',
    name: 'index',
    component: Index,
    meta: {
      keepAlive: true
    }
  }, {
    path: '/category',
    redirect: 'kind',
    name: 'category',
    component: category,
    meta: {
      keepAlive: true
    },
    children: [{
      path: '/kind',
      name: 'Kind',
      component: Kind,
      meta: {
        keepAlive: true
      }
    },
    {
      path: '/facialskincare',
      name: 'Facialskincare',
      component: Facialskincare,
      meta: {
        keepAlive: true
      }
    },
    {
      path: '/mask',
      name: 'Mask',
      component: Mask,
      meta: {
        keepAlive: true
      }
    }, {
      path: '/bodyClean',
      name: 'BodyClean',
      component: BodyClean,
      meta: {
        keepAlive: true
      }
    }, {
      path: '/hairCair',
      name: 'HairCair',
      component: HairCair,
      meta: {
        keepAlive: true
      }
    }, {
      path: '/chineseGoods',
      name: 'ChineseGoods',
      component: ChineseGoods,
      meta: {
        keepAlive: true
      }
    }, {
      path: '/international',
      name: 'International',
      component: International,
      meta: {
        keepAlive: true
      }
    }, {
      path: '/sunscreen',
      name: 'Sunscreen',
      component: Sunscreen,
      meta: {
        keepAlive: true
      }
    }
    ]
  },
  {
    path: '/me',
    name: 'Me',
    component: Me,
    meta: {
      keepAlive: true
    }
  }, {
    path: '/shopcar',
    name: 'Shopcar',
    component: Shopcar,
    meta: {
      keepAlive: true
    }
  }, {
    path: '/login',
    name: 'Login',
    component: Login,
    meta: {
      keepAlive: false
    }
  }, {
    path: '/register',
    name: 'Register',
    component: Register,
    meta: {
      keepAlive: false
    }
  },
  {
    path: '/adressList',
    name: 'AdressList',
    component: AdressList,
    meta: {
      keepAlive: true
    }
  }, {
    path: '/help',
    name: 'Help',
    component: Help,
    meta: {
      keepAlive: true
    }
  }, {
    path: '/aboutus',
    name: 'AboutUs',
    component: AboutUs,
    meta: {
      keepAlive: true
    }
  }, {
    path: '/good',
    name: 'Good',
    component: Good,
    meta: {
      keepAlive: false
    }
  }
  ],
  linkActiveClass: 'mui-active'
})
