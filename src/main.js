import Vue from 'vue'
import App from './App.vue'
import 'amfe-flexible/index.min.js'
import router from './router'
import store from './store'
import {
  Button, NavBar, Search, Cell, CellGroup, Collapse, CollapseItem
  , Tab, Tabs, DropdownMenu, DropdownItem, TreeSelect, Popup, Icon, Divider,
  List, Tag
} from 'vant'
Vue.use(Button).use(NavBar).use(Search).use(Cell).use(CellGroup).use(Collapse).use(CollapseItem).use(Tab).use(Tabs).use(DropdownMenu).use(DropdownItem).use(TreeSelect).use(Icon)
  .use(Popup).use(Divider).use(List).use(Tag)
Vue.config.productionTip = false
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
