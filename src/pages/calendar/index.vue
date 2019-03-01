<template>
  <div class="main">
    <div id="dates"></div>
    <div id="calendar" :style="{'height' : height + 'rpx'}">
      <div class="timeline flex v-center space-between" v-for="item in timeline" :key="item">
        <div class="clock-time">{{item}}</div>
        <div class="line"></div>
      </div>
      <div v-for="item in events" class="event flex v-center space-around" :key="item.name" :style="{width: item.width + 'rpx', height: item.height + 'rpx', top: item.top + 'rpx', right: item.right + 'rpx'}">
        <div>{{item.name}}</div>
      </div>
    </div>
  </div>
</template>

<script>
import _ from '@/utils/index'
export default {
  name: 'index',
  data: function () {
    return {
      height: 0, // 单位是rpx
      events: [
        {
          startTime: 7,
          endTime: 9,
          name: '早饭'
        }, {
          startTime: 9,
          endTime: 11,
          name: '企业参访'
        }, {
          startTime: 9,
          endTime: 11,
          name: '开发'
        }, {
          startTime: 14,
          endTime: 15,
          name: 'workshop1'
        }, {
          startTime: 14,
          endTime: 16,
          name: 'workshop2'
        }, {
          startTime: 14,
          endTime: 19,
          name: 'workshop3'
        }, {
          startTime: 15,
          endTime: 17,
          name: 'workshop4'
        }, {
          startTime: 17,
          endTime: 24,
          name: '开发'
        }
      ],
      timeline: []
    }
  },
  methods: {
    init: function () {
      mpvue.getSystemInfo({
        success: res => {
          this.height = res.windowHeight / res.windowWidth * 750 - 100
          _.D(this.height)
        }
      })
      let timeline = []
      for (let i = 7; i <= 24; ++i) {
        timeline.push(`${_.setLength(i)}:00`)
      }
      this.timeline = timeline
      this.sortEvent()
    },
    sortEvent: function () {
      // 排序event，生成每个块的位置
      this.events.sort((a, b) => {
        return a.startTime - b.startTime
      })
      let trackEndTime = []
      for (let i of this.events) {
        for (let j in trackEndTime) {
          if (i.startTime >= trackEndTime[j]) {
            i.track = Number(j)
            trackEndTime[j] = i.endTime
            break
          }
        }
        if (i.track === undefined) {
          trackEndTime.push(i.endTime)
          i.track = trackEndTime.length - 1
        }
      }
      _.D(this.events)
      let trackNum = trackEndTime.length
      let trackWidth = 600 / trackNum
      for (let i of this.events) {
        i.width = trackWidth - 12
        i.height = (i.endTime - i.startTime) * 100 - 8
        i.top = (i.startTime - 7) * 100 + 50 + 4
        i.right = (trackNum - 1 - i.track) * trackWidth + 30 + 4
      }
    }
  },
  mounted: function () {
    this.init()
  }
}
</script>

<style scoped>
  #dates {
    height: 100rpx;
    background: #aaaaaa;
  }
  #calendar {
    background: antiquewhite;
    overflow: auto;
    position: relative;
  }
  .timeline {
    line-height: 100rpx;
    font-size: 24rpx;
    padding: 0 30rpx;
  }
  .line {
    width: 600rpx;
    height: 2rpx;
    background: gray;
  }
  .clock-time {
    width: 32rpx;
    text-align: center;
  }
  .event {
    position: absolute;
    background: rgba(167, 255, 255, 0.4);
    font-size: 32rpx;
    text-align: center;
    border-left: 4rpx solid blue;
  }
</style>
