<template>
  <div class='box font-hei'>
    <div>Hello {{name}}</div>
    <div class="head icon" ></div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        name: "Vue"
      };
    }
  };
</script>

<style>
  .head {
    background-image: url('assets/img.jpg');
    width: 100px;
    height: 100px;
  }
</style>