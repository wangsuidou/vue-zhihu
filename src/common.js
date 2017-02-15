
function handleSizeChange(val) {
  this.pageSize = val;
  console.log(`每页 ${val} 条`);
  this.$store.dispatch('FETCH_SHOP_LIST',{pageIndex:this.pageIndex,pageSize:this.pageSize})
}

function handleCurrentChange(val) {
  this.pageIndex = val;
  console.log(`当前页: ${val}`);
  this.$store.dispatch('FETCH_SHOP_LIST',{pageIndex:this.pageIndex,pageSize:this.pageSize})
}