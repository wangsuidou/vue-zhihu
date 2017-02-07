import Vue from 'vue'
import VueRouter from 'vue-router'

/*路由組件*/
import Root from './Root'
import App from './pages/App'
import NewDetail from './pages/NewDetail'

Vue.use(VueRouter)

const routers = [
	{
		path:'/',
		component:App
	},
	{
		path:'/app',
		component:App
	},
	{
		path:'/news-detail/:id',
		name:'news-detail',
		components:NewDetail
	}
]

export const router = new VueRouter({
	routes:routers,
	hashbang:true
})