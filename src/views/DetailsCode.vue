<template>
  <div class="details">
    <van-nav-bar :title="title" left-text="返回" left-arrow @click-left="onClickLeft" />
    <van-search v-model="value" placeholder="请输入搜索公司名称" @search="onSearch" />
    <div class="code" v-for="(item,index) in result" :key="index">
      <van-cell title="日期" :value="item['日期']" />
      <van-cell title="公司" :value="item['公司']" />
      <van-cell title="风险级别" :value="item['等级']"></van-cell>
      <van-cell title="风险维度" :value="item['风险维度']"></van-cell>
      <van-cell title="类型" :value="item['类型']" />
      <van-collapse v-model="activeNames">
        <van-collapse-item title="详情" :name="index">{{item['备注']}}</van-collapse-item>
      </van-collapse>
    </div>
  </div>
</template>
<script>
import { Toast } from "vant";

export default {
  name: "DetailsCode",
  data() {
    return {
      title: "",
      value: "",
      activeNames: ["-1"],
      result: []
    };
  },
  methods: {
    onSearch(val) {
      this.fuzzySearch(this.$route.params.result, val);
    },
    onClickLeft() {
      this.$router.go(-1);
    },
    fuzzySearch(list, search) {
      let data = [];
      if (list.length != 0 && search) {
        let str = `\S*${search}\S*`;
        let reg = new RegExp(str);
        list.map(item => {
          if (reg.test(item["公司"])) {
            data.push(item);
          }
        });
      }
      if (data.length == 0) {
        Toast("搜索");
        return;
      }
      this.result = data;
    }
  },
  created() {
    this.title = this.$route.params.title;
    this.result = this.$route.params.result;
  }
};
</script>

<style scoped>
h3 {
  text-align: center;
}
.code {
  margin: 10px auto;
  border-radius: 10px;
  width: 80%;
  border: 1px solid #eaeaea;
}
</style>