import Vue from 'vue'
import VueRouter from 'vue-router'

/*路由組件*/
import Root from './Root'
import App from './pages/App'
import NewDetail from './pages/NewDetail'
import Themes from './pages/Themes'
import ThemeList from './pages/ThemeList'
import Description from './components/Description'
/*登录*/
import Login from './pages/login'
/*table*/
import Table from './pages/Table'
import page_1 from './components/table/page_1'
import page_2 from './components/table/page_2'
import page_3 from './components/table/page_3'
import page_4 from './components/table/page_4'
import page_5 from './components/table/page_5'




Vue.use(VueRouter)

const routers = [
	{
		path:'/',
		component:App
	},
	{	
		name:'app',
		path:'/app',
		component:App
	},
	{
		path:'/login',
		component:Login
	},
	{
		path:'/table',
		component:Table,
		children:[
			{
				path:'/page_1',
				component:page_1
			},
			{
				path:'/page_2',
				component:page_2
			},
			{
				path:'/page_3',
				component:page_3
			},
			{
				path:'/page_4',
				component:page_4
			},
			{
				path:'/page_5',
				component:page_5
			},
		]
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