<template>
 
    
    <Tabbar>
      <tabbaritem path="/home" activecolor="">
        <p class="iconfont" slot="item-icon">&#xe7d4;</p>
        <p class="iconfont" slot="item-icon-active">&#xe7d8;</p>
        <p slot="item-text">首页</p>
      </tabbaritem>
      <tabbaritem path="/categroy" activecolor="">
        <p class="iconfont" slot="item-icon">&#xe711;</p>
        <p class="iconfont" slot="item-icon-active">&#xe710;</p>
        <p slot="item-text">分类</p>
      </tabbaritem>
      <tabbaritem path="/cart" activecolor="">
        <p class="iconfont" slot="item-icon">&#xe6af;</p>
        <p class="iconfont" slot="item-icon-active">&#xe6b9;</p>
        <p slot="item-text">购物车</p>
      </tabbaritem>
      <tabbaritem path="/person" activecolor="">
        <p class="iconfont" slot="item-icon">&#xe736;</p>
        <p class="iconfont" slot="item-icon-active">&#xe735;</p>
        <p slot="item-text">我的</p>
      </tabbaritem>
    </Tabbar>
 
</template>

<script>
import Tabbar from "./tabbar";
import tabbaritem from "./tabbar_item";
export default {
  name: "App",
  components: {
    Tabbar,
    tabbaritem
  }
};
</script>

<style>
</style>
