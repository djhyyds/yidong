<template>
  <div id="risk-level" style="padding: 40px 0">
    <!-- <van-nav-bar :title="title" left-text="返回" left-arrow @click-left="onClickLeft" /> -->
    <div class="action">
      <div class="code">
        <div>
          <p>高风险</p>
          <span>{{ result["高风险"] }}</span>
          <div @click="filter('高风险')">查看详情</div>
        </div>
        <div id="main" style="width: 150px; height: 150px" ref="main"></div>
      </div>
      <div class="code">
        <div>
          <p>警示</p>
          <span>{{ result["警示"] }}</span>
          <div @click="filter('警示')">查看详情</div>
        </div>
        <div id="main1" style="width: 150px; height: 150px" ref="main1"></div>
      </div>
      <div class="code">
        <div>
          <p>提示</p>
          <span>{{ result["提示"] }}</span>
          <div @click="filter('提示')">查看详情</div>
        </div>
        <div id="main2" style="width: 150px; height: 150px" ref="main2"></div>
      </div>
      <div class="code">
        <div>
          <p>利好</p>
          <span>{{ result["利好"] }}</span>
          <div @click="filter('利好')">查看详情</div>
        </div>
        <div id="main3" style="width: 150px; height: 150px" ref="main3"></div>
      </div>
      <div class="code2" style="padding: 10px">
        <div id="main4" ref="main4" style="width: 100%; height: 300px"></div>
      </div>
    </div>
  </div>
</template>

<script>
import * as echarts from "echarts"
export default {
  name: "RiskLevel",
  data () {
    return {
      result: { 高风险: 0, 警示: 0, 提示: 0, 利好: 0 },
      ECres: this.$store.state.ECres,
      res2: null,
      date: "",
      res: [],
      myChart: "",
      myChart1: "",
      myChart2: "",
      myChart3: "",
      myChart4: "",
      search2: ['全部']
    }
  },
  methods: {
    // onClickLeft () {
    //   this.$router.go(-1)
    // },
    into () {
      this.result = { 高风险: 0, 警示: 0, 提示: 0, 利好: 0 }

      this.res = this.res2.filter(item => {
        if (this.search2.length != 0 && this.search2.indexOf("全部") == -1) {
          return (
            this.$store.state.nowDate / 1000 - item.时间戳 <= this.date &&
            this.search2.find(a => a == item.分组)
          )
        } else {
          return this.$store.state.nowDate / 1000 - item.时间戳 <= this.date
        }
      })
      this.res.forEach(item => {
        if (this.result[item["等级"]]) {
          this.result[item["等级"]]++
        } else {
          this.result[item["等级"]] = 1
        }
      })
      if (this.res.length == 0) {
        this.res.length = 1
      }
      console.log(this.setOption2)
      this.show5()
      this.show1()
      this.show2()
      this.show3()
      this.show4()
    },
    filter (a) {
      this.$router.push({
        name: "details",
        params: {
          result: "等级",
          a
        }
      })
    },
    show5 () {
      let option
      let gaugeData = [
        {
          value: ((this.result["高风险"] / this.res.length) * 100).toFixed(2),
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
              clip: false,
              itemStyle: {
                color: "red"
              }
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
              color: "red",
              borderColor: "auto",
              formatter: "{value}%"
            }
          }
        ]
      }
      option && this.myChart.setOption(option, true)
    },
    show1 () {
      let option

      let gaugeData = [
        {
          value: ((this.result["警示"] / this.res.length) * 100).toFixed(2),
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
              clip: false,
              itemStyle: {
                color: "#ff7d18"
              }
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
              color: "#ff7d18",
              borderColor: "auto",
              formatter: "{value}%"
            }
          }
        ]
      }
      option && this.myChart1.setOption(option, true)
    },
    show2 () {
      let option
      let gaugeData = [
        {
          value: ((this.result["提示"] / this.res.length) * 100).toFixed(2),
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
              clip: false,
              itemStyle: {
                color: "#aa77cc"
              }
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
              color: "#aa77cc",
              borderColor: "auto",
              formatter: "{value}%"
            }
          }
        ]
      }
      option && this.myChart2.setOption(option, true)
    },
    show3 () {
      let option
      let gaugeData = [
        {
          value: ((this.result["利好"] / this.res.length) * 100).toFixed(2),
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
              clip: false,
              itemStyle: {
                color: "#119944",
                borderColor: "#119944"
              }
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
              color: "#119944",

              formatter: "{value}%"
            }
          }
        ]
      }
      option && this.myChart3.setOption(option)
    },
    show4 () {
      var option
      let a,
        b = true
      a = this.date == 604800 ? 7 : 30
      let s = []
      if (this.search2.length) {
        this.search2.forEach(item2 => {
          let r = this.ECres.find(item => {
            if (
              this.search2.length != 0 &&
              this.search2.indexOf("全部") == -1
            ) {
              b = item.group === item2
            } else {
              if (item.group == "all") {
                b = item.group == "all"
              } else if (
                item.group.substr(
                  item.group.length - 3,
                  item.group.length - 1
                ) === "all"
              ) {
                b =
                  item.group.substr(
                    item.group.length - 3,
                    item.group.length - 1
                  ) === "all"
              } else {
                b =
                  item.group.substr(0, 2) === "人法" ||
                  item.group.substr(0, 2) === "数科"
              }
            }
            return item["source_" + a] && b
          })
          s.push(r)
        })
      }

      let aaa = null
      if (s.length == 1) {
        aaa = s[0]
      } else {
        let ts = [[], [], [], [], []]
        s.forEach(item => {
          ts[0] = item["source_" + a][0]
          ts[1].push(item["source_" + a][1])
          ts[2].push(item["source_" + a][2])
          ts[3].push(item["source_" + a][3])
          ts[4].push(item["source_" + a][4])
        })
        ts.forEach((item, index) => {
          if (index > 0) {
            ts[index] = item.reduce((prev, cur) => {
              cur.forEach((item, index) => {
                if (typeof prev[index] === "number") {
                  prev[index] += item
                } else {
                  prev[index] = item
                }
              })
              return prev
            }, [])
          }
        })
        aaa = {}
        aaa["source_" + a] = ts
      }

      option = {
        legend: {},
        tooltip: {
          trigger: "axis"
        },
        dataset: {
          source: aaa["source_" + a]
        },
        xAxis: {
          type: "category", boundaryGap: true, show: false, axisLabel: {
            rotate: 45,//倾斜度 -90 至 90 默认为0
            margin: 4,
            fontSize: 8
          }
        },
        yAxis: { gridIndex: 0 },

        grid: { top: "20%" },
        series: [
          {
            type: "line",
            smooth: true,
            seriesLayoutBy: "row",
            // symbol: "none",
            symbolSize: 3, //一定要加这个字段才能显示
            itemStyle: {
              normal: {
                label: {
                  show: true,
                  position: "top",
                  fontSize: 8,
                  textStyle: {
                    color: "auto"
                  }
                }
              }
            },

            emphasis: { focus: "series" }
          },
          {
            type: "line",
            smooth: true,
            // symbol: "none",
            seriesLayoutBy: "row",
            emphasis: { focus: "series" },
            symbolSize: 3, //一定要加这个字段才能显示
            itemStyle: {
              normal: {
                label: {
                  show: true,
                  position: "top",
                  fontSize: 8,
                  textStyle: {
                    color: "auto"
                  }
                }
              }
            }
          },
          {
            type: "line",
            smooth: true,
            // symbol: "none",
            seriesLayoutBy: "row",
            emphasis: { focus: "series" },
            symbolSize: 3, //一定要加这个字段才能显示
            itemStyle: {
              normal: {
                label: {
                  show: true,
                  position: "top",
                  fontSize: 8,
                  textStyle: {
                    color: "auto"
                  }
                }
              }
            }
          },
          {
            type: "line",
            smooth: true,
            // symbol: "none",
            seriesLayoutBy: "row",
            emphasis: { focus: "series" },
            symbolSize: 3, //一定要加这个字段才能显示
            itemStyle: {
              normal: {
                label: {
                  show: true,
                  position: "top",
                  fontSize: 8,
                  textStyle: {
                    color: "auto"
                  }
                }
              }
            }
          }
        ]
      }
      // this.myChart4.on("updateAxisPointer", function (event) {
      //   const xAxisInfo = event.axesInfo[0]
      //   if (xAxisInfo) {
      //     const dimension = xAxisInfo.value + 1
      //     this.myChart4.setOption({
      //       series: {
      //         id: "pie",
      //         label: {
      //           formatter: "{b}: {@[" + dimension + "]} ({d}%)"
      //         },
      //         encode: {
      //           value: dimension,
      //           tooltip: dimension
      //         }
      //       }
      //     })
      //   }
      // })

      this.myChart4.setOption(option)
    }
  },
  mounted () {
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
  },
  created () {
    this.res2 = this.$store.state.res
    this.date = this.$store.state.date
    this.search2 = this.$store.state.search
  }
};
</script>

<style lang='less' scoped>
h3 {
  text-align: center;
}
.action {
  display: flex;
  flex-wrap: wrap;
}
.code {
  margin: 10px auto;
  border-radius: 10px;
  width: 80%;
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
.code2 {
  margin: 10px auto;
  border-radius: 10px;
  width: 80%;
  border: 1px solid #eaeaea;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
}
</style>
