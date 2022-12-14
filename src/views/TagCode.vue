<template>
  <div class="view">
    <div class="header">
      <van-tabs v-model="active" @click="onClick">
        <van-tab title="风险级别"></van-tab>
        <van-tab title="风险维度"></van-tab>
        <van-tab title="监控列表"></van-tab>
        <van-tab title="动态更新"></van-tab>
      </van-tabs>
    </div>
    <div class="content"><router-view></router-view></div>
    <div class="foot"></div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      active: 1,
    }
  },
  methods: {
    onClick (name, title) {
      if (title == "风险级别") {
        this.$router.push({ name: 'risk', params: { title: '风险级别' } })
      } else if (title == "风险维度") {
        this.$router.push({ name: 'about', params: { title: '风险维度' } })
      } else if (title == "监控列表") {
        this.$router.push({ name: 'details', params: { title: '监控列表' } })
      } else {
        this.$router.push({ name: 'sum', params: { title: '企业汇总' } })
      }
    }
  }
}
</script>

<style scoped>
.view {
  background-color: rgba(250, 250, 247, 0.6);
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  z-index: 1;
  overflow: hidden;
  width: 100%;
  height: 100%;
  margin: 0 auto;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
}
.header {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  width: 100%;
}
.content {
  position: absolute;
  overflow-y: scroll;
  width: 100%;
  height: 100%;
}

</style>