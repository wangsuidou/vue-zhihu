import * as types from '../zhihu-types.js'
import axios from 'axios'

const state = {
	NewsLatest:{},
	NewListRoot:[]
}

const getters = {

	[types.DONE_NEWS_LATEST]: state => {
        return state.NewsLatest
    },

}

const mutations = {
    [types.TOGGLE_NEWS_LATEST](state,all) {

        state.NewsLatest = all
    }

}

const actions = {
    //获取首页消息列表 
    [types.FECTH_NEWS_LATEST]({commit}) {
        axios.get('http://lovestreet.leanapp.cn/zhihu/news/latest')
            .then(res =>{
                //将消息列表赋值给 TOGGLE_NEWS_LATEST
                commit(types.TOGGLE_NEWS_LATEST,res.data)
            }).catch(err => console.log(err))
    }

}


export default {
	state,
	getters,
	mutations,
	actions
}