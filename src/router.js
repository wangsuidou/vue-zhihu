import Vue from 'vue'
import VueRouter from 'vue-router'

/*路由組件*/
import Root from './Root'
import App from './pages/App'
import NewDetail from './pages/NewDetail'
import Themes from './pages/Themes'
import ThemeDetail from './pages/ThemeDetail'
import Description from './components/Description'

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
		component:NewDetail
	},
	{
		path:'/themes',
		component:Themes
	},
	{
		path:'/theme-detail/:id',
		name:'theme-detail',
		component:ThemeDetail
	},
	{
		path:'/description',
		component:Description
	}
]

export const router = new VueRouter({
	routes:routers,
	hashbang:true
})