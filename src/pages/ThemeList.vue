<template>
	<div>
		<LoadingTwo v-if="DONE_LOADING_TWO"></LoadingTwo>
		<!-- <div>这是专题列表</div> -->
		<ThemeHead :image="DONE_THEMES_LIST.image" :name="DONE_THEMES_LIST.name" :description="DONE_THEMES_LIST.description" :editors="DONE_THEMES_LIST.editors"></ThemeHead>
		<div class="theme-list ml2 mr2 mb2">
			<div v-for="item in DONE_THEMES_LIST.stories">
				<router-link :to="{name:'news-detail',params:{id:item.id}}" style="color: black">
					<ThemeLink v-if="item.type == 0" :title='item.title'></ThemeLink>
				</router-link>	
				<router-link :to="{name: 'news-detail', params: {id: item.id}}" style="color: black">
					<ZHihuListCover v-if="item.type == 1" :title="item.title" :images="item.images ? item.images[0]:'http://daily.zhihu.com/img/new_home_v3/mobile_top_logo.png'"></ZHihuListCover>
				</router-link>
				<router-link :to="{name: 'news-detail', params: {id: item.id}}" style="color: black">
					<ZHihuListCover v-if="item.type == 2" :title="item.title" :images="item.images ? item.images[0]:'http://daily.zhihu.com/img/new_home_v3/mobile_top_logo.png'"></ZHihuListCover>
				</router-link>
			</div>
		</div>
	</div>
</template>

<script type="text/javascript">
	import {mapGetters} from 'vuex'
	import LoadingTwo from '../components/common/LoadingTwo'
	import ThemeHead from '../components/Theme/ThemeHead'
	import ThemeLink from '../components/Theme/ThemeLink'

	export default {
		name:'ThemeDetail',
		components:{
			LoadingTwo,
			ThemeHead,
			ThemeLink
		},
		computed:{
			...mapGetters(['DONE_THEMES_LIST','DONE_LOADING_TWO'])
		},
		created:function(){
			this.$store.dispatch('FETCH_THEMES_LIST',this.$route.params.id)
			window.scrollTo(0,0)
		}
	}
</script>          


<style type="text/css">
	
</style>