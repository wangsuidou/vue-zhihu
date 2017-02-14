import * as types from '../shop-types.js'
import axios from 'axios'

const shopUrl = '/api/v1/shop'

const state ={
	shopList:{info:[],pageInfoDto:{}},
}


const getters = {
	[types.DONE_SHOP_LIST]: state => {
		return state.shopList
	}
}

const mutations = {
	[types.TOGGLE_SHOP_LIST](state,all){
		 state.shopList = all
	} 

}


const actions = {
	//获取列表
	[types.FETCH_SHOP_LIST]({commit},params) {
		// console.log(params)
		axios.get(shopUrl + '/goods')
			.then(res => {
				commit(types.TOGGLE_SHOP_LIST,res.data)
			}).catch(err => console.log(err))
	}
 
}



export default {
	state,
	getters,
	mutations,
	actions
}