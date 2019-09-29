<template>
  <ul v-if="luckyBeggarList.length > 0">
    <li v-for="(item, index) in luckyBeggarList" v-bind:key="index">
      {{item}}
    </li>
  </ul>
</template>

<script>
export default {
  props: {
    luckyBeggarList: { type: Array },
  },
};
</script>
