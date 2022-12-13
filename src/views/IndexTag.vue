<template>
  <div class="index">
    <h3>风险概况</h3>
    <div class="code">
      <van-button
        plain
        type="danger"
        @click="$router.push({name:'risk',params:{title:'风险级别'}})"
      >风险级别</van-button>
      <van-button
        plain
        type="primary"
        @click="$router.push({name:'about',params:{title:'风险维度'}})"
      >风险维度</van-button>
      <van-button
        plain
        type="info"
        @click="$router.push({name:'details',params:{title:'监控列表',result:$store.state.res}})"
      >监控列表</van-button>
    </div>
  </div>
</template>

<script>
export default {
  methods: {}
};


</script>

<style scoped>
h3 {
  text-align: center;
}
.code {
  display: flex;
  flex-direction: column;
}
</style>










