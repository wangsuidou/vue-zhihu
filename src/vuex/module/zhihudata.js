import * as types from '../zhihu-types.js'
import axios from 'axios'
var moment = require('moment')


const accountUrl = '/account'

const state = {
	NewsLatest:{},
    NewsListRoot:[],
    NewsDetail:{},
    Themes:{},
    ThemeList:{}, 
    LoadingTwo:true,
    loadingOne:false,
    Time:moment(),
    UserInfo:'登录'
}

const getters = {
    //用户信息
    [types.DONE_LOGIN_INFO]: state => {
        return state.UserInfo
    },
    //日报头条
	[types.DONE_NEWS_LATEST]: state => {
        return state.NewsLatest
    },
    [types.DONE_NEWS_LIST_ROOT]: state => {
        return state.NewsListRoot
    },
    //日报详情
    [types.DONE_NEWS_DETAIL]: state => {
        return state.NewsDetail
    },
    //专题s
    [types.DONE_THEMES]: state =>{
        return state.Themes
    },
    //专题列表
    [types.DONE_THEMES_LIST]: state => {
        return state.ThemeList
    },
    //laodingtwo
    [types.DONE_LOADING_TWO]:state =>{
        return state.LoadingTwo
    },
    //loadingOne
    [types.DONE_LOADING_ONE]:state => {
        return state.loadingOne
    }

}

const mutations = {
    //用户信息
    [types.TOGGLE_LOGIN_INFO](state,all) {
        state.UserInfo = all
    },
    //日报列表
    [types.TOGGLE_NEWS_LATEST](state,all) {
        state.NewsLatest = all
        state.NewsListRoot.push(all)
        state.LoadingTwo = false
    },
    //获取更多
    [types.TOGGLE_NEWS_LATEST_MORE](state,all) {
        state.NewsListRoot.push(all)
        state.Time.subtract(1, "days")
        state.LoadingOne = false
    },
    //日报详情
    [types.TOGGLE_NEWS_DETAIl](state,all) {
        state.LoadingTwo = false
        state.NewsDetail = all
    },
    //专题s
    [types.TOGGLE_THEMES](state,all) {
        state.Themes = all
        state.LoadingTwo = false
    },
    //专题列表
    [types.TOGGLE_THEMES_LIST](state,all ){
        state.ThemeList = all
        state.LoadingTwo = false
    }



}

const actions = {
    //登录
    [types.POST_LOGIN_INFO]({commit},postData) {
       state.UserInfo = '登录'
       axios({
          method: 'post',
          url: accountUrl+'/user/login',
          data: 'phone='+postData.phone+'&password='+postData.password,
          headers:{'Content-Type':'application/x-www-form-urlencoded'}
        }).then(res => {
            commit(types.TOGGLE_LOGIN_INFO,res.data)
        }).catch(err => console.log(err))
    },
    //获取首页日报列表
    [types.FECTH_NEWS_LATEST]({commit}) {
        axios.get('http://lovestreet.leanapp.cn/zhihu/news/latest')
            .then(res =>{
                //将消息列表赋值给 TOGGLE_NEWS_LATEST
                commit(types.TOGGLE_NEWS_LATEST,res.data)
            }).catch(err => console.log(err))
    },
    //获取更多
    [types.FECTH_NEWS_LATEST_MORE]({commit}) {
        var now = state.Time.format("YYYYMMDD")
        axios.get('http://lovestreet.leanapp.cn/zhihu/before/' + now)
            .then(res => {
                commit(types.TOGGLE_NEWS_LATEST_MORE,res.data)
            }).catch(err => console.log(err))
    },
    //获取日报详情
    [types.FETCH_NEWS_DETAIL]({commit},id) {
        state.LoadingTwo = true
        axios.get('http://lovestreet.leanapp.cn/zhihu/news/'+id)
            .then(res =>{
                commit(types.TOGGLE_NEWS_DETAIl,res.data)
            }).catch(err => console.log(err))
    },
    //获取日报专题
    [types.FETCH_THEMES]({commit}) {
        state.LoadingTwo = true
        axios.get('http://lovestreet.leanapp.cn/zhihu/themes')
            .then(res =>{
                commit(types.TOGGLE_THEMES,res.data)
            }).catch(err => console.log(err))
    },
    //获取专题列表
    [types.FETCH_THEMES_LIST]({commit},id) {
        state.LoadingTwo = true
        axios.get('http://lovestreet.leanapp.cn/zhihu/themes/' + id)
            .then(res => {
                commit(types.TOGGLE_THEMES_LIST,res.data)
            }).catch(err =>console.log(err))
    }

}


export default {
	state,
	getters,
	mutations,
	actions
}