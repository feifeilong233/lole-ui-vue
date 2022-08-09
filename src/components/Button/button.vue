<template>
  <div>组件示例</div>
  <div>{{ count }}</div>
  <lole-button btnType="default" @click="handleClick">Default Button</lole-button>
  <lole-button btnType="primary" @click="handleClick">Primary Button</lole-button>
  <lole-button btnType="link" @click="handleClick">Link Button</lole-button>
  <lole-button btnType="dashed" @click="handleClick">Dashed Button</lole-button>
  <lole-button btnType="danger" @click="handleClick">Danger Button</lole-button>
  <div>
    <Image src="./meimei.jpg" size="small" alt="lole-UI" avatar="true" spaced="middle"/>
    <span>feifeilong</span>
  </div>
  <div>
    <Zone attached='top'>This segment is on top</Zone>
    <Zone attached>This segment is attached on both sides</Zone>
    <Zone attached='bottom'>This segment is on bottom</Zone>
  </div>
  <Statistic>
    <StatisticLabel>收藏数</StatisticLabel>
    <StatisticValue>23,333</StatisticValue>
  </Statistic>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'App',
  components: {
  },
  data() {
    return {
      count: 0
    }
  },
  methods: {
    handleClick() {
      this.count ++
    }
  }
});
</script>

<style scoped>

</style>
