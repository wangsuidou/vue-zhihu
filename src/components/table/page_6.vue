<template>
	<div>{{DONE_SHOP_DETAIL}}</div>
</template>


<script type="text/javascript">
	import {
		mapGetters
	} from 'vuex'
	export default {
		data:function(){
			return {

			}
		},
		computed: {
			...mapGetters(['DONE_SHOP_DETAIL'])
		},
		created:function () {
			this.$store.dispatch('FETCH_SHOP_DETAIL',this.$route.params.id)
		}	
	}
	
</script>