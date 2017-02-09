import Vue from 'vue'
import VueRouter from 'vue-router'

/*路由組件*/
import Root from './Root'
import App from './pages/App'
import NewDetail from './pages/NewDetail'
import Themes from './pages/Themes'
import ThemeList from './pages/ThemeList'
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
		path:'/theme-list/:id',
		name:'theme-list',
		component:ThemeList
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