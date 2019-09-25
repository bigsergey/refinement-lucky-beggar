<template>
  <section>
    <div class="field" v-for="(item, index) in list" v-bind:key="index">
      <b-tag
        size="is-medium"
        attached
        closable
        aria-close-label="Remove participant"
      >{{index + 1}}. {{item}}</b-tag>
    </div>
  </section>
</template>

<script>
export default {
  props: {
    list: Array,
  },
};
</script>
