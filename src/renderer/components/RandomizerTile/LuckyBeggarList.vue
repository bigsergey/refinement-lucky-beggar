<template>
  <ul class="wrapper">
    <li class="field" v-for="(item, index) in luckyBeggarList" :key="index">
      <b-tag
        :type="index === 0 ? 'is-success' : 'is-light'"
        :size="index === 0 ? 'is-medium' : ''"
      >{{item}}</b-tag>
    </li>
    <li v-if="luckyBeggarList.length === historyRecordNumber">...</li>
  </ul>
</template>

<script>
export default {
  props: {
    luckyBeggarList: { type: Array },
    historyRecordNumber: { type: Number },
  },
};
</script>

<style scoped>
.wrapper {
  padding-top: 12px;
}
</style>
