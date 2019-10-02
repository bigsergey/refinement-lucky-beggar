<template>
  <ul>
    <li class="field" v-for="(item, index) in list" :key="index">
      <b-tag
        size="is-medium"
        attached
        closable
        aria-close-label="Remove participant"
        @close="onRemove(index)"
      >{{index + 1}}. {{item}}</b-tag>
    </li>
  </ul>
</template>

<script>
export default {
  props: {
    list: { type: Array },
  },
  methods: {
    onRemove(index) {
      this.list.splice(index, 1);
    },
  },
};
</script>
