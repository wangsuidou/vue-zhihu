<template>
<transition name='homeTransition'>
	<div>
		<!-- ===the navigation bar fixed in the top, when the page rolling after to 400px=== -->
		<div :class='ZhihuHeadFixClass'> 
			<ZhihuHeadFix></ZhihuHeadFix>
		</div>
		<!-- ===show the loading page when load the news data=== -->
		<LoadingTwo v-show="DONE_LOADING_TWO"></LoadingTwo>
		<!-- ===the news list=== -->
		<!-- 头条 -->
		<TopNews :TopNewsData="DONE_NEWS_LATEST.top_stories"></TopNews>
	</div>
</transition>


</template>


<script>
	import {
		mapGetters
	}  from 'vuex'
	import ZhihuHeadFix from '../components/ZhihuHeadFix'
	import LoadingTwo from '../components/common/LoadingTwo'
	import TopNews from '../components/list/TopNews'

	export default {
		data: function() {
			return {
				ZhihuHeadFixClass: 'ZhihuHeadFixClass-none'
			}
		},
		name: 'App',
		components: {
			ZhihuHeadFix,
			LoadingTwo,
			TopNews
		},
		computed: {
			...mapGetters(['DONE_NEWS_LATEST','DONE_LOADING_TWO'])
		},
		created: function() {
			var _this = this;
			_this.$store.dispatch('FECTH_NEWS_LATEST')
		},
		method: {
			loadMoreNews: function(){
				//this.ZhihuHeadFixClass= 'ZhihuHeadFixClass-none'
			}

		}


	}	

</script>


<style>
/* ===the style of the news list style=== */



/* ===the transition style of template: ZhihuHeadFix=== */

.ZhihuHeadFixClass-none {
	width: 100%;
	position: fixed;
	top: -2rem;
	transition: all 0.5s ease;
}
.ZhihuHeadFixClass-on {
	position: fixed;
	top: 0;
	width: 100%;
	transition: all 0.5s ease;
}
/* ==过度动画== */

.homeTransition-enter-active,
.homeTransition-leave-active {
	transition: opacity .5s
}

.homeTransition-enter,
.homeTransition-leave-active {
	opacity: 0;
}
	

</style>