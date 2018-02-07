<template>
  <div class='co' >
    <h3>Hello egg</h3>
    <div class='img' ></div>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      name: "dog"
    };
  }
};
</script>

<style lang="stylus">
.co {
  color #f00
}
.img {
  background-image url('./static/img.jpg')
  width 100px
  height 100px
}
</style>

