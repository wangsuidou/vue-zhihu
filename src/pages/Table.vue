  <template>
    <div>
      <SideBar></SideBar>
      <el-table :data="tableData" style="width: 100%;margin-top:30px;">
        <el-table-column  prop="date" label="日期" width="180"></el-table-column>
        <el-table-column prop="name"label="姓名" width="180"></el-table-column>
        <el-table-column prop="address" label="地址"></el-table-column>
      </el-table>
    </div>
  </template>


 <script>
  import SideBar from './SideBar'
  export default {
    data() {
      return {
        tableData: [{
          date: '2016-05-02',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-04',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1517 弄'
        }, {
          date: '2016-05-01',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1519 弄'
        }, {
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1516 弄'
        }]
      }
    },
    components:{
      SideBar
    }
  }
</script>
<style type="text/css">
  /*@import url("//unpkg.com/element-ui/lib/theme-default/index.css");*/
</style>