  <template>
    <div>
        <section class="side-bar">
          <!-- <el-row class="tac"> -->
          <el-row class="">
            <el-col :span="8">
              <el-menu default-active="2" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose" theme="dark" :router="true">
                <el-submenu index="1">
                  <template slot="title">导航一</template>
                  <el-menu-item-group title="分组一">
                    <el-menu-item index="/page_1">页面1</el-menu-item>
                    <el-menu-item index="/page_2">页面2</el-menu-item>
                  </el-menu-item-group>
                  <el-menu-item-group title="分组二">
                    <el-menu-item index="/page_3">页面3</el-menu-item>
                  </el-menu-item-group>
                  <el-submenu index="1-4">
                    <template slot="title">选项4</template>
                    <el-menu-item index="/page_4">页面4</el-menu-item>
                  </el-submenu>
                </el-submenu>
                <el-menu-item index="/page_5">导航二</el-menu-item>
                <el-menu-item index="3">导航三</el-menu-item>
              </el-menu>
            </el-col>
          </el-row>  
        </section>
        <main class="content">
             <router-view></router-view>
        </main>
    </div>
  </template>


 <script>
  export default {
    data() {
      return {
      }
    },
    components:{
    },
    methods: {
      handleOpen(key, keyPath) {
        console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
      }
    }
  }
</script>
<style type="text/css">
  /*@import url("//unpkg.com/element-ui/lib/theme-default/index.css");*/

.side-bar{
  width: 1000px;
}

/*content*/
.content{
  width: 72%;
  min-height: 650px;
  position: absolute;
  top:4.5rem;
  right: 0;
}
</style>