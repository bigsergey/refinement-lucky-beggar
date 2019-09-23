<template>
  <ul>
    <li v-for="(item, index) in list" v-bind:key="index">
      {{index + 1}}. {{item}}
    </li>
  </ul>
</template>

<script>
export default {
  props: {
    list: Array,
  },
};
</script>
