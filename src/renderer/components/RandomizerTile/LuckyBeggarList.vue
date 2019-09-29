<template>
  <ul class="wrapper" v-if="luckyBeggarList.length > 0">
    <li class="field" v-for="(item, index) in getLastRecords(luckyBeggarList)" v-bind:key="index">
      <b-tag v-if="index === 0" size="is-medium" type="is-success">{{item}}</b-tag>
      <b-tag v-if="index > 0" type="is-light">{{item}}</b-tag>
    </li>
    <li v-if="luckyBeggarList.length > lastRecordNumber">...</li>
  </ul>
</template>

<script>
export default {
  props: {
    luckyBeggarList: { type: Array },
    lastRecordNumber: {
      type: Number,
      default: 4,
    },
  },
  methods: {
    getLastRecords() {
      return this.luckyBeggarList.slice(0, this.lastRecordNumber);
    },
  },
};
</script>

<style scoped>
.wrapper {
  padding-top: 12px;
}
</style>
