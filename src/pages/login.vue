<template>
	<div>
		<div v-if='DONE_LOGIN_INFO == "登录"'>
			用户名:<input type="text"  v-model="loginData.phone"><br/>
			密码:<input type="text" v-model="loginData.password">
			<div id="err-msg"></div>
			<button @click="login()">登录</button>
		</div>
		<div v-if='DONE_LOGIN_INFO != "登录"'>
				<p>用户名：{{DONE_LOGIN_INFO.phone}}</p>
				<p>用户ID：<span style="font-size:0.75rem">{{DONE_LOGIN_INFO.userId}}</span></p>
			<button @click="logOut()">点击退出</button>
		</div>
	</div>
</template>


<script type="text/javascript">
	import {
		mapGetters
	} from 'vuex'
	export default {
		data: function() {
			return {
				loginData:{}
			}
		},
		name: 'Login',
		components: {
			
		},
		computed: {
			...mapGetters(['DONE_LOGIN_INFO'])
		},
		methods:{
			login: function(){
				this.$store.dispatch('POST_LOGIN_INFO',this.loginData)

				console.log(this.$route);
			},
			logOut :function(){
				// router.replace('/app')
				window.location.href='/app'
				//this.$router.push('/app');
			}
		}
	}
</script>


<style type="text/css">
	
</style>