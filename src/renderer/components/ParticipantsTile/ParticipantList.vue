<template>
  <ul>
    <li class="field" v-for="(item, index) in list" :key="index">
      <b-tag
        size="is-medium"
        attached
        closable
        aria-close-label="Remove participant"
        @close="$emit('remove-item', index)"
      >{{index + 1}}. {{item}}</b-tag>
    </li>
  </ul>
</template>

<script>
export default {
  props: {
    list: { type: Array },
  },
};
</script>
