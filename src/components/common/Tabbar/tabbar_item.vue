<template>
  <div class="tab_bar_item" @click="itemClick">
    <div v-if="!isactive"><slot name="item-icon"></slot></div>
    <div v-else><slot name="item-icon-active"></slot></div>
    <div :style="activeStyle"><slot name="item-text"></slot></div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  props: {
    path: {
      type: String,
      required: true
    },
    activecolor: {
      type: String,
      default: "#333333"
    }
  },
  methods: {
    itemClick() {
      this.$router.replace(this.path);
    }
  },
  computed: {
    isactive() {
      return this.$route.path.indexOf(this.path) !== -1;
    },
    activeStyle() {
      return this.isactive ? { color: this.activecolor } : {};
    }
  }
};
</script>
<style lang="">
.tab_bar_item {
  flex: 1;
  text-align: center;
  height: 49px;
}

@font-face {
  font-family: "iconfont";
  src: url("../../../assets/font/iconfont.eot");
  src: url("../../../assets/font/iconfont.eot?#iefix") format("embedded-opentype"),
    url("../../../assets/font/iconfont.woff2") format("woff2"),
    url("../../../assets/font/iconfont.woff") format("woff"),
    url("../../../assets/font/iconfont.ttf") format("truetype"),
    url("../../../assets/font/iconfont.svg#iconfont") format("svg");
}
.iconfont {
  font-family: "iconfont" !important;
  font-size: 24px;
  font-style: normal;
  margin-top: 3px;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
.tab_bar_item p:nth-child(2) {
  font-size: 15px;
  color: #5d656b;
}
</style>
