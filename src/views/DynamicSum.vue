<template>
  <div style="padding: 40px 0">
    <van-search
      v-model="value"
      placeholder="请输入搜索公司名称"
      @search="onSearch"
    />
    <van-list
      v-model="loading"
      :finished="finished"
      finished-text="没有更多了"
      @load="onLoad"
    >
      <div class="code" v-for="(item, index) in list" :key="index">
        <div class="top">
          <span style="color: #1a73e8">{{ item["K02_企业"] }}</span>
          <div>
            {{ item["K10_全部"] }}<span style="color: #aaa"> 条动态</span>
          </div>
        </div>
        <van-divider
          :style="{
            borderColor: '#fff',
            padding: '0 16px',
          }"
        />
        <div class="bottom">
          <div>
            高风险<span style="color: red"> {{ item["K11_高风险"] }}</span>
          </div>
          <div>
            警示<span style="color: #ff976a"> {{ item["K12_警示"] }}</span>
          </div>
          <div>
            提示<span style="color: #aa77cc"> {{ item["K14_提示"] }}</span>
          </div>
          <div>
            利好<span style="color: #07c160"> {{ item["K13_利好"] }}</span>
          </div>
        </div>
      </div>
    </van-list>
  </div>
</template>

<script>
export default {
  data () {
    return {
      sumList: this.$store.state.sumList['last_month'],
      list: [],
      loading: false,
      finished: false,
      value: null,
    }
  },
  methods: {
    onSearch (val) {
      this.fuzzySearch(this.$route.params.result, val)
    },
    // onClickLeft () {
    //   this.$router.go(-1)
    // },
    fuzzySearch (list, search) {
      let data = []
      if (list.length != 0 && search) {
        let str = `\S*${search}\S*`
        let reg = new RegExp(str)
        list.map(item => {
          if (reg.test(item["公司"])) {
            data.push(item)
          }
        })
      }
      if (data.length == 0) {

        return
      }
      this.result = data
    },
    onLoad () {
      // 异步更新数据
      // setTimeout 仅做示例，真实场景中一般为 ajax 请求
      setTimeout(() => {
        for (let i = 0; i < 10; i++) {
          this.list.push(this.sumList[this.list.length])
        }

        // 加载状态结束
        this.loading = false

        // 数据全部加载完成
        if (this.list.length >= this.sumList.length) {
          this.finished = true
        }
      }, 1000)
    },
  }
}
</script>

<style lang='less' scoped>
.code {
  margin: 10px;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  font-size: 14px;
  background-color: rgb(231, 248, 253);
  padding: 10px;
  .top {
    padding: 0 10px;
    display: flex;
    justify-content: space-between;
  }
  .bottom {
    display: flex;
    justify-content: space-around;
  }
}
</style>