import Vue from 'vue'
import Vuex from 'vuex'
import zhihudata from './module/zhihudata.js'
import shopdata from './module/shopdata.js'



Vue.use(Vuex)

export default new Vuex.Store({
	modules:{
		zhihudata,
		shopdata
	}
})