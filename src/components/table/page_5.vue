<template>
  <div>
    <el-table :data="DONE_SHOP_LIST.info" border style="width: 100%">
      <el-table-column prop="id" label="商品ID" sortable width="180">
      </el-table-column>
      <el-table-column prop="goodsName" label="商品名称" width="180">
      </el-table-column>
      <el-table-column prop="goodsUgoodsNamerl" label="商品图片" >
      </el-table-column>
     <!--  <el-table-column prop="goodsUrl" label="商品图片" :formatter="formatter">
      </el-table-column> -->
      <el-table-column prop="outPrice" label="外部价格">
      </el-table-column>
      <el-table-column prop="price" label="内部价格" >
      </el-table-column>
      <el-table-column prop="stock" label="商品库存" >
      </el-table-column>
      <el-table-column prop="goodsType" label="商品状态">
      </el-table-column>
      <el-table-column prop="aa" label="操作">
      </el-table-column>
      <el-table-column prop="tag" label="标签" width="100" :filters="[{ text: '家', value: '家' }, { text: '公司', value: '公司' }]" :filter-method="filterTag">
        <template scope="scope">
          <el-tag :type="scope.row.tag === '家' ? 'primary' : 'success'" close-transition>{{scope.row.tag}}</el-tag>
        </template>
      </el-table-column>
  </el-table>
  <el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page="1" :page-sizes="[5, 10, 15, 20]" :page-size="10" layout="total, sizes, prev, pager, next, jumper" :total="DONE_SHOP_LIST.pageInfoDto.total">
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
          params:{
            pageIndex:1,
            pageSize:10
          }
        }
      },
      methods: {
        formatter(row, column) {
          return row.address;
        },
        filterTag(value, row) {
          return row.tag === value;
        },
        handleSizeChange(val) {
          this.params.pageIndex = val;
          // console.log(`每页 ${val} 条`);
          // console.log(this.params);
          this.$store.dispatch('FETCH_SHOP_LIST',this.params)
        },
        handleCurrentChange(val) {
          // this.params.currentPage = val;
          // console.log(`当前页: ${val}`);
          this.$store.dispatch('FETCH_SHOP_LIST',this.params)
        }
      },
     computed: {
        ...mapGetters(['DONE_SHOP_LIST'])
      },
      created:function　(){
        var _this = this;
        _this.$store.dispatch('FETCH_SHOP_LIST',this.Params)
      }
  }
</script>