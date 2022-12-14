<template>
  <div class="details" style="padding: 40px 0">
    <!-- <van-nav-bar :title="title" left-text="返回" left-arrow @click-left="onClickLeft" /> -->
    <div class="nav">
      <span>近三十日全部动态</span>
      <span @click="show = true">筛选<van-icon name="filter-o" /></span>
    </div>
    <van-popup v-model="show" round position="bottom" :style="{ height: '60%' }"
      ><van-tree-select
        style="margin-top: 20px"
        :items="items"
        :active-id.sync="activeIds"
        :main-active-index.sync="activeIndex"
      />
      <div class="btn">
        <van-button type="default" size="large">重置</van-button>
        <van-button type="info" size="large">确定</van-button>
      </div>
    </van-popup>
    <van-search
      v-model="value"
      placeholder="请输入搜索公司名称"
      @search="onSearch"
    />
    <!-- <div class="code" v-for="(item, index) in result" :key="index">
      <van-cell title="日期" :value="item['日期']" />
      <van-cell title="公司" :value="item['公司']" />
      <van-cell title="风险级别" :value="item['等级']"></van-cell>
      <van-cell title="风险维度" :value="item['风险维度']"></van-cell>
      <van-cell title="类型" :value="item['类型']" />
      <van-collapse v-model="activeNames">
        <van-collapse-item title="详情" :name="index">{{
          item["备注"]
        }}</van-collapse-item>
      </van-collapse>
    </div> -->

    <div class="code">
      <div class="top">
        <span style="font-size: 16px; color: #1a73e8"
          >奇瑞汽车股份有限公司</span
        >
        <span style="font-size: 8px; color: #aaa"
          >新增<span style="color: black">1</span>条监控信息</span
        >
      </div>
      <van-cell-group style="margin: 10px 0">
        <van-cell is-link label="4400万人民币股权发生了股权冻结">
          <!-- 使用 title 插槽来自定义标题 -->
          <template #title>
            <span class="custom-title">司法协助</span>

            <van-tag type="warning">警示信息</van-tag>
          </template>
        </van-cell>
      </van-cell-group>
    </div>
    <div class="code">
      <div class="top">
        <span style="font-size: 16px; color: #1a73e8"
          >奇瑞汽车股份有限公司</span
        >
        <span style="font-size: 8px; color: #aaa"
          >新增<span style="color: black">1</span>条监控信息</span
        >
      </div>
      <van-cell-group style="margin: 10px 0">
        <van-cell is-link label="4400万人民币股权发生了股权冻结">
          <!-- 使用 title 插槽来自定义标题 -->
          <template #title>
            <span class="custom-title">司法协助</span>

            <van-tag type="warning">警示信息</van-tag>
          </template>
        </van-cell>
      </van-cell-group>
    </div>
    <div class="code">
      <div class="top">
        <span style="font-size: 16px; color: #1a73e8"
          >奇瑞汽车股份有限公司</span
        >
        <span style="font-size: 8px; color: #aaa"
          >新增<span style="color: black">1</span>条监控信息</span
        >
      </div>
      <van-cell-group style="margin: 10px 0">
        <van-cell is-link label="4400万人民币股权发生了股权冻结">
          <!-- 使用 title 插槽来自定义标题 -->
          <template #title>
            <span class="custom-title">司法协助</span>

            <van-tag type="warning">警示信息</van-tag>
          </template>
        </van-cell>
      </van-cell-group>
    </div>
    <div class="code">
      <div class="top">
        <span style="font-size: 16px; color: #1a73e8"
          >奇瑞汽车股份有限公司</span
        >
        <span style="font-size: 8px; color: #aaa"
          >新增<span style="color: black">1</span>条监控信息</span
        >
      </div>
      <van-cell-group style="margin: 10px 0">
        <van-cell is-link label="4400万人民币股权发生了股权冻结">
          <!-- 使用 title 插槽来自定义标题 -->
          <template #title>
            <span class="custom-title">司法协助</span>

            <van-tag type="warning">警示信息</van-tag>
          </template>
        </van-cell>
      </van-cell-group>
    </div>
  </div>
</template>
<script>


export default {
  name: "DetailsCode",
  data () {
    return {
      title: "",
      value: "",
      activeNames: ["-1"],
      result: [],
      items: [
        {
          // 导航名称
          text: '监控分组',
          // 导航名称右上角徽标，2.5.6 版本开始支持
          // badge: 3,
          // 是否在导航名称右上角显示小红点
          dot: false,
          // 导航节点额外类名
          className: 'my-class',
          // 该导航下所有的可选项
          children: [
            {
              // 名称
              text: '全部',
              // id，作为匹配选中状态的标识符
              id: 1,
              // 禁用选项
              disabled: false,
            },
            {
              text: '采购-低-供应链管理',
              id: 1 - 1,
            },
            {
              text: '采购-低-技术风控',
              id: 1 - 2,
            },
            {
              text: '采购-低-人力行政',
              id: 1 - 3,
            },
            {
              text: '采购-低-市场推广',
              id: 1 - 4,
            },
          ],
        },
        {
          // 导航名称
          text: '风险级别',
          // 导航名称右上角徽标，2.5.6 版本开始支持

          // 是否在导航名称右上角显示小红点
          // dot: true,
          // 导航节点额外类名
          className: 'my-class',
          // 该导航下所有的可选项
          children: [
            {
              // 名称
              text: '全部',
              // id，作为匹配选中状态的标识符
              id: 2,
              // 禁用选项
              disabled: false,
            },
            {
              text: '高风险',
              id: 2 - 1,
            },
            {
              text: '提示',
              id: 2 - 2,
            },
            {
              text: '警示',
              id: 2 - 3,
            },
            {
              text: '利好',
              id: 2 - 4,
            },
          ],
        },
        {
          // 导航名称
          text: '风险维度',
          // 导航名称右上角徽标，2.5.6 版本开始支持

          // 是否在导航名称右上角显示小红点
          // dot: true,
          // 导航节点额外类名
          className: 'my-class',
          // 该导航下所有的可选项
          children: [
            {
              // 名称
              text: '全部',
              // id，作为匹配选中状态的标识符
              className: 'my-class',
              // 禁用选项
              disabled: false,
              children: [
                {
                  // 名称
                  text: '全部',
                  // id，作为匹配选中状态的标识符
                  id: 2,
                  // 禁用选项
                  disabled: false,
                },
                {
                  text: '高风险',
                  id: 2 - 1,
                },
                {
                  text: '提示',
                  id: 2 - 2,
                },
                {
                  text: '警示',
                  id: 2 - 3,
                },
                {
                  text: '利好',
                  id: 2 - 4,
                },
              ],
            },
            {
              text: '高风险',
              id: 2 - 1,
            },
            {
              text: '提示',
              id: 2 - 2,
            },
            {
              text: '警示',
              id: 2 - 3,
            },
            {
              text: '利好',
              id: 2 - 4,
            },
          ],
        },
      ],
      activeIds: [1, 2 - 1, 2 - 2],
      activeIndex: 0,
      show: false
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
    }
  },
  created () {
    this.title = this.$route.params.title
    this.result = this.$route.params.result
  }
};
</script>

<style scoped>
h3 {
  text-align: center;
}
.code {
  margin: 10px;
  border-radius: 5px;
  padding: 10px;
  border: 1px solid #eaeaea;
}
.nav {
  box-sizing: border-box;
  width: 100%;
  font-size: 12px;
  background-color: rgb(228, 237, 250);
  display: flex;
  padding: 15px;
  justify-content: space-between;
}
.top {
  display: flex;
  flex-direction: column;
}
.custom-title {
  font-weight: bold;
  font-size: 16px;
  margin-right: 5px;
}
.btn {
  margin-top: 10px;
  display: flex;
  justify-content: space-around;
}
</style>