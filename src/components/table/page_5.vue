<template>
  <div>
    <el-input placeholder="请输入内容" v-model="goodsName" @change='getList()'>
      <template slot="prepend">商品名称</template>
    </el-input>
    <el-table :data="DONE_SHOP_LIST.info" border style="width: 100%">
      <el-table-column prop="id" label="商品ID" sortable width="180"></el-table-column>
      <el-table-column prop="goodsName" label="商品名称" width="180"></el-table-column>
      <el-table-column prop="goodsUgoodsNamerl" label="商品图片" ></el-table-column>
     <!--  <el-table-column prop="goodsUrl" label="商品图片" :formatter="formatter"></el-table-column> -->
      <el-table-column prop="outPrice" label="外部价格"></el-table-column>
      <el-table-column prop="price" label="内部价格" ></el-table-column>
      <el-table-column prop="stock" label="商品库存" ></el-table-column>
      <el-table-column prop="goodsType" label="商品状态"></el-table-column>
      <el-table-column label="操作">
           <template scope="scope">
              <el-button type="text" size="small">查看</el-button>
              <el-button type="text" size="small" @click="handleEdit(scope)">编辑</el-button>
            </template>
      </el-table-column>
      <!-- <el-table-column prop="tag" label="标签" width="100" :filters="[{ text: '家', value: '家' }, { text: '公司', value: '公司' }]" :filter-method="filterTag">
        <template scope="scope">
          <el-tag :type="scope.row.tag === '家' ? 'primary' : 'success'" close-transition>{{scope.row.tag}}</el-tag>
        </template>
      </el-table-column> -->
    </el-table>
    <el-pagination 
      @size-change="handleSizeChange" 
      @current-change="handleCurrentChange" 
      :current-page="pageIndex" 
      :page-sizes="[5, 10, 15, 20]" 
      :page-size="pageSize" 
      layout="total, sizes, prev, pager, next, jumper" 
      :total="DONE_SHOP_LIST.pageInfoDto.total">
    </el-pagination>
  </div>
</template>

<script type="text/javascript">

  import {
    mapGetters
  } from 'vuex'
  export default {
      data() {
        return {
            pageIndex:1,
            pageSize:10,
            goodsName:this.goodsName
        }
      },
      methods: {
        formatter(row, column) {
          return row.address;
        },
        filterTag(value, row) {
          return row.tag === value;
        },
        getList:function(){
            this.$store.dispatch('FETCH_SHOP_LIST',{pageIndex:this.pageIndex,pageSize:this.pageSize,goodsName:this.goodsName})
        },
        /*getByFilter:function(){
          setTimeout(function(){
            // this.getList();
            this.$store.dispatch('FETCH_SHOP_LIST',{pageIndex:this.pageIndex,pageSize:this.pageSize,goodsName:this.goodsName})
          },200)
        },*/
        handleSizeChange(val) {
          this.pageSize = val;
          console.log(`每页 ${val} 条`)
          this.getList()
        },
        handleCurrentChange(val) {
          this.pageIndex = val;
          console.log(`当前页: ${val}`);
          this.getList()
        },

        handleEdit:function(scope){
            this.$router.push('/editTable/'+scope.row.id)
        }
      },
      computed: {
        ...mapGetters(['DONE_SHOP_LIST'])
      },
      created:function(){
         this.getList()
      },
      watch:{
          // 通过这种语法来watch就行，文档里有。。。看需求，还可以直接watch data，使用deep:true来深度观察
          'data.goodsName':{
              function (val,oldVal){
                  //要执行的任务
                  console(val,oldVal)

              },
              // 深度观察
              deep:true
          }
      },

  }
</script>