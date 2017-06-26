<template>
  <div id="app">
    <transition name="fade" mode="out-in">
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style lang="scss">
body {
  margin: 0;
  padding: 0;
  height: 100%;
  width: 100%;
  background: #f2f2f2;
}

li {
  list-style-type: none;
}

#app {
  font-family: 'Microsoft YaHei', 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  position: relative;
}

// 过度动画
.fade-enter-active,
.fade-leave-active {
  transition: all .2s ease;
}

.fade-enter,
.fade-leave-active {
  opacity: 0;
}

td {
  .el-input-number {
    width: auto;
  }
  img {
    width: 50px;
    height: 50px;
  }
}

</style>
