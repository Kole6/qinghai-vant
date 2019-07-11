<!--菜单栏4.0-->
<template>
  <div>
    <el-menu router :default-active="$route.path" @open="handleOpen" @close="handleClose">
      <template v-for="(mex,i) of $store.state.menuObj.children">
        <el-menu-item
          v-if="mex.children==null || mex.children==undefined || mex.children.length === 0"
          :index="mex.href"
          @click="handClick(mex)"
          :key="i*10"
        >
          <!-- <i class="el-icon-menu"></i> -->
          <span slot="title">{{mex.name}}</span>
        </el-menu-item>

        <!-- 第二层 start -->
        <el-submenu v-else :index="i+'href'" :key="i">
          <template slot="title">
            <span>{{mex.name}}</span>
          </template>

          <template v-for="(mexc,i2) of mex.children">
            <!-- 第三层 start  todo:绑定点击事件-->
            <el-submenu
              v-if="mexc.children!=undefined && mexc.children!=null &&  mexc.children.length != 0"
              :index="i2*100+'href'"
              :key="i2*100"
            >
              <template slot="title">{{mexc.name}}</template>
              <el-menu-item
                :index="mexct.href"
                v-for="(mexct,i3) of mexc.children"
                :key="i3*1000"
                @click="handClick(mexct)"
              >{{mexct.name}}</el-menu-item>
            </el-submenu>
            <!-- 第三层 end 想用下面el-menu-item加上 v-else-->

            <el-menu-item
              v-else
              :index="mexc.href"
              :key="i2*100"
              @click="handClick(mexc)"
            >{{mexc.name}}</el-menu-item>
          </template>
        </el-submenu>
        <!-- 第二层 end -->
      </template>
    </el-menu>
  </div>
</template>
<script>
export default {
  props: {
    menuObj: {
      type: Object,
      default: {}
    }
  },
  data() {
    return {
      menuObjTest: {
        name: "综合信息",
        href: "information",
        children: [
          {
            name: "学校基础信息",
            href: "",
            children: [
              //部
              {
                name: "学校信息",
                href: "/head/page/information/schoolInfo"
              },
              {
                name: "教师信息",
                href: "/head/page/information/teacherInfo"
              },
              {
                name: "学生信息",
                href: "/head/page/information/studentInfo"
              },

              //省市

              //校
              {
                name: "校级学校信息",
                href: "/head/page/information/schoolInfoShool"
              }
            ]
          },
          {
            name: "办学场地",
            href: "/head/page/field/field"
          }
        ]
      }
    };
  },

  methods: {
    handleOpen(key, keyPath) {
      //   console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      //   console.log(key, keyPath);
    },
    handClick(mexc) {
      this.$emit("clickMenu", mexc);
      // console.log("sxss", href);
    }
  }
};
</script>
<style lang='scss' scoped>
</style>