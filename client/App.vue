<template>
  <div class='box' >
    <h3>Hello {{name}}</h3>
    <div class='img' ></div>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      name: "Egg.js"
    };
  }
};
</script>

<style lang="stylus">
.box {
  display flex
  align-items center
  flex-direction column
}
.img {
  background-image url('./static/img.jpg')
  width 100px
  height 100px
}
</style>

