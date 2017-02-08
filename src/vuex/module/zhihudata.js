import * as types from '../zhihu-types.js'
import axios from 'axios'

const state = {
    LoadingTwo:true,
	NewsLatest:{},
    Themes:{},
    LoadingTwo:true
}

const getters = {
    //消息列表
	[types.DONE_NEWS_LATEST]: state => {
        return state.NewsLatest
    },
    //主题列表
    [types.DONE_THEMES]: state =>{
        return state.Themes
    },

    //laodingtwo
    [types.DONE_LOADING_TWO]:state =>{
        return state.LoadingTwo
    }

}

const mutations = {
    //消息列表
    [types.TOGGLE_NEWS_LATEST](state,all) {
        state.NewsLatest = all
        state.LoadingTwo = false
    },
    //主题列表
    [types.TOGGLE_THEMES](state,all) {
        state.Themes = all
        state.LoadingTwo = false
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
    },
    //获取日报主题
    [types.FETCH_THEMES]({commit}) {
        state.LoadingTwo = true
        axios.get('http://lovestreet.leanapp.cn/zhihu/themes')
        .then(res =>{
            commit(types.TOGGLE_THEMES,res.data)
        }).catch(err => console.log(err))
    }

}


export default {
	state,
	getters,
	mutations,
	actions
}