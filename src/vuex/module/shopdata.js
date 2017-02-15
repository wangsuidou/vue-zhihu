import * as types from '../shop-types.js'
import axios from 'axios'

const shopUrl = '/api/v1/shop'

const state ={
	shopList:{info:[],pageInfoDto:{}},
	shopDetail:{}
}


const getters = {
	[types.DONE_SHOP_LIST]: state => {
		return state.shopList
	},
	[types.DONE_SHOP_DETAIL]: state => {
		return state.shopDetail
	}
}

const mutations = {
	[types.TOGGLE_SHOP_LIST](state,all){
		 state.shopList = all
	},
	[types.TOGGLE_SHOP_DETAIL](state,all){
		console.log(state,all);
		 state.shopDetail = all
	} 

}


const actions = {
	//获取列表
	[types.FETCH_SHOP_LIST]({commit},params) {
		axios.get(shopUrl + '/goods',{params:params})
			.then(res => {
				commit(types.TOGGLE_SHOP_LIST,res.data)
			}).catch(err => console.log(err))
	},
	//获取详情
	[types.FETCH_SHOP_DETAIL]({commit},params) {
		axios.get(shopUrl + '/goods/'+params)
			.then(res =>{
				console.log(res);
				commit(types.TOGGLE_SHOP_DETAIL,res.data)
			}).catch(err => console.log(err)) 
	}
 
}



export default {
	state,
	getters,
	mutations,
	actions
}