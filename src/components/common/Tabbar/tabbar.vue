<template>
    <div class="tab_bar">
      <slot></slot>
    </div>
</template>

<script>
export default {
  name: "App"
};
</script>

<style>
/* @import url("../../assets/css/base.css"); */
.tab_bar {
  display: flex;
  background-color: #f6f6f6;

  position: fixed;
  bottom: 0px;
  right: 0px;
  left: 0px;

  box-shadow: 0px 1px 6px rgba(100, 100, 100, 0.5);
}
</style>
