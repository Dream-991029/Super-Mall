<template>
  <div id="dream-swiper">
    <div class="swiper" @touchstart="touchStart" @touchmove="touchMove" @touchend="touchEnd">
      <!--轮播图插槽-->
      <slot></slot>
    </div>
    <div class="indicator">
      <slot name="indicator" v-if="showIndicator && slideCount > 1">
        <div :key="index" v-for="(item, index) in slideCount" class="indi-item"
             :class="{active: index === currentIndex - 1}"></div>
      </slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "Swiper",
  props: {
    interval: {
      type: Number,
      default: 3000
    },
    animDuration: {
      type: Number,
      default: 700
    },
    moveRatio: {
      type: Number,
      default: 0.25
    },
    showIndicator: {
      type: Boolean,
      default: true
    }
  },
  data() {
    return {
      slideCount: 0, // 图片总个数
      totalWidth: 0, // swiper的宽度
      swiperStyle: {}, // swiper样式
      currentIndex: 1, // 当前的index
      scrolling: false, // 是否正在滚动
    }
  },
  mounted() {
    // 挂载后,延迟三秒开启定时器
    setTimeout(() => {
      // 1.在全部图片前后各添加一张图片
      this.handleDom();
      // 2.开启定时器
      this.startTimer();
    }, 100)
  },
  methods: {
    // 开启定时器
    startTimer() {
      // 创建定时器(每隔1秒执行一次)
      this.playTimer = window.setInterval(() => {
        // 当前轮播索引加1
        this.currentIndex++;
        this.scrollContent(-this.currentIndex * this.totalWidth);
      }, this.interval)
    },
    // 停止计时器
    stopTimer() {
      window.clearInterval(this.playTimer)
    },
    // 滚动到正确位置
    scrollContent(currentPosition) {
      // 设置正在滚动
      this.scrolling = true;
      // 开始滚动动画
      this.swiperStyle.transition = 'transform ' + this.animDuration + 'ms';
      // 设置滚动距离
      this.setTransform(currentPosition);
      // 验证滚动方向
      this.checkPosition();
      // 滚动完成
      this.scrolling = false;
    },
    // 设置滚动距离
    setTransform(position) {
      // 添加transform
      this.swiperStyle.transform = `translate3d(${position}px, 0, 0)`;
      this.swiperStyle['-webkit-transform'] = `translate3d(${position}px), 0, 0`;
      this.swiperStyle['-ms-transform'] = `translate3d(${position}px), 0, 0`;
    },
    // 验证滚动方向
    checkPosition() {
      window.setTimeout(() => {
        // 1.校验正确的位置
        this.swiperStyle.transition = '0ms';
        // 最后一张图片
        if (this.currentIndex >= this.slideCount + 1) {
          // 初始化当前索引
          this.currentIndex = 1;
          // 重置滚动距离
          this.setTransform(-this.currentIndex * this.totalWidth);
        } else if (this.currentIndex <= 0) {
          this.currentIndex = this.slideCount;
          this.setTransform(-this.currentIndex * this.totalWidth);
        }
        // 2.结束移动后的回调
        this.$emit('transitionEnd', this.currentIndex - 1);
      }, this.animDuration)
    },
    // 在全部图片前后各添加一张图片
    handleDom() {
      // 1.获取要操作的元素
      let swiperEl = document.querySelector('.swiper');
      let slidesEls = swiperEl.getElementsByClassName('slide');
      // 2.保存图片总个数
      this.slideCount = slidesEls.length
      // 3.如果大于1个, 那么在前后分别添加一张图片
      if (this.slideCount > 1) {
        let cloneFirst = slidesEls[0].cloneNode(true);
        let cloneLast = slidesEls[this.slideCount - 1].cloneNode(true);
        swiperEl.insertBefore(cloneLast, slidesEls[0]);
        swiperEl.appendChild(cloneFirst);
        this.totalWidth = swiperEl.offsetWidth;
        this.swiperStyle = swiperEl.style;
      }
      // 4.让swiper元素, 显示第一个(目前是显示前面添加的最后一个元素)
      this.setTransform(-this.totalWidth);
    },
    // 开始拖动
    touchStart(e) {
      // 正在滚动,则不能拖动
      if (this.scrolling) return;
      // 停止定时器
      this.stopTimer();
      // 保存拖动开始的位置
      this.startX = e.touches[0].pageX;
    },
    // 正在拖动
    touchMove(e) {
      // 计算出用户拖动的距离
      this.currentX = e.touches[0].pageX;
      this.distance = this.currentX - this.startX;
      let currentPosition = -this.currentIndex * this.totalWidth;
      let moveDistance = this.distance + currentPosition;
      // 设置当前的位置
      this.setTransform(moveDistance);
    },
    // 拖动完成
    touchEnd() {
      // 获取移动的距离
      let currentMove = Math.abs(this.distance);
      // 判断最终的距离
      if (this.distance === 0) {
        return;
      } else if (this.distance > 0 && currentMove > this.totalWidth * this.moveRatio) { // 右边移动
        this.currentIndex--;
      } else if (this.distance < 0 && currentMove > this.totalWidth * this.moveRatio) { // 向左移动
        this.currentIndex++;
      }
      // 移动到正确的位置
      this.scrollContent(-this.currentIndex * this.totalWidth);
      // 移动完成后重启定时器
      this.startTimer();
    }
  }
}
</script>

<style scoped>
  #dream-swiper {
    overflow: hidden;
    position: relative;
  }

  .swiper {
    display: flex;
  }

  .indicator {
    display: flex;
    justify-content: center;
    position: absolute;
    width: 100%;
    bottom: 8px;
  }

  .indi-item {
    box-sizing: border-box;
    width: 8px;
    height: 8px;
    border-radius: 4px;
    background-color: #fff;
    line-height: 8px;
    text-align: center;
    font-size: 12px;
    margin: 0 5px;
  }

  .active {
    background-color: rgba(212,62,46,1.0);
  }

</style>
