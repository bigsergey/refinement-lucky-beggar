<template>
  <ul v-if="luckyBeggarList.length > 0">
    <li
      v-for="(item, index) in getLastRecords(luckyBeggarList)"
      v-bind:key="index"
    >{{item}}</li>
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
