<template>
  <div id="about-view" style="padding: 40px 0">
    <!-- <van-nav-bar :title="title" left-text="返回" left-arrow @click-left="onClickLeft" /> -->
    <div class="code">
      <div>
        <p>司法风险</p>
        <span>{{ result["司法风险"] }}</span>
        <div @click="filter('司法风险')">查看详情</div>
      </div>
      <div id="main" style="width: 150px; height: 150px" ref="main"></div>
    </div>
    <div class="code">
      <div>
        <p>工商风险</p>
        <span>{{ result["工商风险"] }}</span>
        <div @click="filter('工商风险')">查看详情</div>
      </div>
      <div id="main1" style="width: 150px; height: 150px" ref="main1"></div>
    </div>
    <div class="code">
      <div>
        <p>经营风险</p>
        <span>{{ result["经营风险"] }}</span>
        <div @click="filter('经营风险')">查看详情</div>
      </div>
      <div id="main2" style="width: 150px; height: 150px" ref="main2"></div>
    </div>
    <div class="code">
      <div>
        <p>经营状况</p>
        <span>{{ result["经营状况"] }}</span>
        <div @click="filter('经营状况')">查看详情</div>
      </div>
      <div id="main3" style="width: 150px; height: 150px" ref="main3"></div>
    </div>
    <div class="code">
      <div ref="main4" style="width: 100%; height: 300px"></div>
    </div>
  </div>
</template>

<script>
import * as echarts from "echarts"
export default {
  name: "AboutView",
  data () {
    return {
      date: this.$store.state.date,
      obj: {
        法院公告: "司法风险",
        失信被执行人: "司法风险",
        被执行人: "司法风险",
        开庭公告: "司法风险",
        司法协助: "司法风险",
        送达公告: "司法风险",
        立案信息: "司法风险",
        限制消费令: "司法风险",
        终本案件: "司法风险",
        涉金融黑名单: "司法风险",
        破产重整: "司法风险",
        询价评估: "司法风险",
        大股东变更: "工商风险",
        主要人员变更: "工商风险",
        任职信息: "工商风险",
        企业状态变更: "工商风险",
        企业类型变更: "工商风险",
        法定代表人变更: "工商风险",
        企业名称变更: "工商风险",
        注册资本变更: "工商风险",
        登记机关变更: "工商风险",
        注册地址变更: "工商风险",
        经营范围变更: "工商风险",
        机构成员: "工商风险",
        监控主体: "工商风险",
        司法拍卖: "经营风险",
        清算信息: "经营风险",
        税收违法: "经营风险",
        简易注销: "经营风险",
        行政处罚: "经营风险",
        环保处罚: "经营风险",
        公示催告: "经营风险",
        土地抵押: "经营风险",
        股权质押: "经营风险",
        股权冻结: "经营风险",
        注销备案: "经营风险",
        管理基金: "经营风险",
        监控主体: "经营风险",
        投融资动态: "经营状况",
        招投标: "经营状况",
        债券信息: "经营状况",
        购地信息: "经营状况",
        税务评级: "经营状况",
        抽查检查: "经营状况",
        产品信息: "经营状况",
        进出口信用: "经营状况",
        知识产权: "经营状况",
        土地转让: "经营状况",
        地块公示: "经营状况",
        行政许可: "经营状况",
        电信许可: "经营状况",
        一般纳税人: "经营状况",
        产品召回: "经营状况",
        上榜榜单: "经营状况",
        食品安全: "经营状况",
        客户: "经营状况",
        供应商: "经营状况",
        信用评级: "经营状况",
        公告研报: "经营状况",
        资产交易: "经营状况"
      },
      ECres: this.$store.state.ECres,
      result: { 司法风险: 0, 工商风险: 0, 经营风险: 0, 经营状况: 0 },
      myChart: "",
      myChart1: "",
      myChart2: "",
      myChart3: "",
      myChart4: "",
      res2: null,
      res: null,
      search2: ['全部']
    }
  },
  methods: {
    into () {
      this.result = { 司法风险: 0, 工商风险: 0, 经营风险: 0, 经营状况: 0 }
      this.res = this.res2
      this.res.forEach(item => {
        if (this.result[item["风险维度"]]) {
          this.result[item["风险维度"]]++
        } else {
          this.result[item["风险维度"]] = 1
        }
      })
      this.show()
      this.show1()
      this.show2()
      this.show3()
      this.show4()
    },
    filter (b) {
      this.$router.push({
        name: "details",
        params: {
          result: "风险维度",
          b
        }
      })
    },
    // onClickLeft () {
    //   this.$router.go(-1)
    // },
    show () {
      let option
      const gaugeData = [
        {
          value: ((this.result["司法风险"] / this.res.length) * 100).toFixed(2),
          detail: {
            valueAnimation: false,
            offsetCenter: ["0%", "0%"]
          }
        }
      ]
      option = {
        series: [
          {
            type: "gauge",
            startAngle: 90,
            endAngle: -270,
            pointer: {
              show: false
            },
            progress: {
              show: true,
              overlap: false,
              roundCap: false,
              clip: false
            },
            axisLine: {
              lineStyle: {
                width: 20
              }
            },
            splitLine: {
              show: false,
              distance: 0,
              length: 10
            },
            axisTick: {
              show: false
            },
            axisLabel: {
              show: false,
              distance: 50
            },
            data: gaugeData,
            detail: {
              fontSize: 20,
              color: "auto",
              formatter: "{value}%"
            }
          }
        ]
      }
      option && this.myChart.setOption(option)
    },
    show1 () {
      let option
      const gaugeData = [
        {
          value: ((this.result["工商风险"] / this.res.length) * 100).toFixed(2),
          detail: {
            valueAnimation: false,
            offsetCenter: ["0%", "0%"]
          }
        }
      ]
      option = {
        series: [
          {
            type: "gauge",
            startAngle: 90,
            endAngle: -270,
            pointer: {
              show: false
            },
            progress: {
              show: true,
              overlap: false,
              roundCap: false,
              clip: false
            },
            axisLine: {
              lineStyle: {
                width: 20
              }
            },
            splitLine: {
              show: false,
              distance: 0,
              length: 10
            },
            axisTick: {
              show: false
            },
            axisLabel: {
              show: false,
              distance: 50
            },
            data: gaugeData,
            detail: {
              fontSize: 20,
              color: "auto",
              borderColor: "auto",
              formatter: "{value}%"
            }
          }
        ]
      }
      option && this.myChart1.setOption(option)
    },
    show2 () {
      let option
      const gaugeData = [
        {
          value: ((this.result["经营风险"] / this.res.length) * 100).toFixed(2),
          detail: {
            valueAnimation: false,
            offsetCenter: ["0%", "0%"]
          }
        }
      ]
      option = {
        series: [
          {
            type: "gauge",
            startAngle: 90,
            endAngle: -270,
            pointer: {
              show: false
            },
            progress: {
              show: true,
              overlap: false,
              roundCap: false,
              clip: false
            },
            axisLine: {
              lineStyle: {
                width: 20
              }
            },
            splitLine: {
              show: false,
              distance: 0,
              length: 10
            },
            axisTick: {
              show: false
            },
            axisLabel: {
              show: false,
              distance: 50
            },
            data: gaugeData,
            detail: {
              fontSize: 20,
              color: "auto",
              formatter: "{value}%"
            }
          }
        ]
      }
      option && this.myChart2.setOption(option)
    },
    show3 () {
      let option
      const gaugeData = [
        {
          value: ((this.result["经营状况"] / this.res.length) * 100).toFixed(2),
          detail: {
            valueAnimation: false,
            offsetCenter: ["0%", "0%"]
          }
        }
      ]
      option = {
        series: [
          {
            type: "gauge",
            startAngle: 90,
            endAngle: -270,
            pointer: {
              show: false
            },
            progress: {
              show: true,
              overlap: false,
              roundCap: false,
              clip: false
            },
            axisLine: {
              lineStyle: {
                width: 20
              }
            },
            splitLine: {
              show: false,
              distance: 0,
              length: 10
            },
            axisTick: {
              show: false
            },
            axisLabel: {
              show: false,
              distance: 50
            },
            data: gaugeData,
            detail: {
              fontSize: 20,
              color: "auto",
              formatter: "{value}%"
            }
          }
        ]
      }
      option && this.myChart3.setOption(option)
    },
    show4 () {
      let option
      let a, b = true
      a = this.date == 604800 ? 7 : 30
      let s = [], r = []
      if (this.search2.length) {
        this.search2.forEach(item2 => {
          r = this.ECres.find(
            item => {
              if (this.search2.length != 0 && this.search2.indexOf('全部') == -1) {
                b = item.group === item2
              } else {
                if (item.group == 'all') { b = item.group == 'all' }
                else if (item.group.substr(item.group.length - 3, item.group.length - 1) === 'all') {
                  b = item.group.substr(item.group.length - 3, item.group.length - 1) === 'all'
                } else {
                  b = item.group.substr(0, 2) === '人法' || item.group.substr(0, 2) === '数科'
                }
              }

              return item["info_" + a] && b

            }
          )
          s.push(r)
        })
      }

      let aaa = null
      if (s.length == 1) {
        aaa = s[0]
      } else {
        let ts = []
        ts = s.reduce((prev, cur) => {
          return cur["info_" + a].concat(prev)
        }, [])

        let temp = {}   //用于name判断重复
        let result = []  //最后的新数组

        ts.map(function (item) {
          if (!temp[item.name]) {
            result.push(JSON.parse(JSON.stringify(item)))
            temp[item.name] = true
          } else {
            result.filter(a => a.name == item.name)[0].value += item.value
          }
          aaa = {}
          aaa["info_" + a] = result
        })

      }
      let data = aaa["info_" + a]
      data = data.sort((a, b) => {
        let value1 = a["value"],
          value2 = b["value"]
        return value2 - value1
      })
      option = {
        series: {
          type: "pie",
          radius: [20, 40],
          emphasis: {
            focus: "self"
          },
          left: "center",
          width: "300px",
          label: {
            formatter: "{name|{b}:{c}，{d}%} \n",
            minMargin: 1,
            edgeDistance: 1,
            lineHeight: 1,
            rich: {
              name: {
                fontSize: "8",
                color: "auto"
              }
            }
          },
          data: data
        }
      }
      option && this.myChart4.setOption(option)
      this.myChart4.on('click', (e) => {
        this.$router.push({ name: 'details', params: { name: e.name } })
      })
    }
  },
  created () {
    this.res2 = this.$store.state.res
  },
  mounted () {
    // this.title = this.$route.params.title
    let main1 = this.$refs.main1
    this.myChart1 = echarts.init(main1)
    let main2 = this.$refs.main2
    this.myChart2 = echarts.init(main2)
    let main3 = this.$refs.main3
    this.myChart3 = echarts.init(main3)
    let main = this.$refs.main
    this.myChart = echarts.init(main)
    let main4 = this.$refs.main4
    this.myChart4 = echarts.init(main4)
    this.into()
  }
};
</script>
<style lang='less' scoped>
h3 {
  text-align: center;
}
.code {
  margin: 10px;
  border-radius: 10px;
  border: 1px solid #eaeaea;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  div {
    p {
      font-weight: 100;
      margin: 0;
    }
    div {
      font-size: 12px;
      font-weight: 100;
    }
    span {
      display: block;
      font-size: 24px;
      margin: 5px 0;
      font-weight: bold;
    }
  }
}
</style>

