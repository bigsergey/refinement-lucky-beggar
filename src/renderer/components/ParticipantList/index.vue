<template>
  <section>
    <div class="field" v-for="(item, index) in list" v-bind:key="index">
      <b-tag
        size="is-medium"
        attached
        closable
        aria-close-label="Remove participant"
        @close="onRemove(index)"
      >{{index + 1}}. {{item}}</b-tag>
    </div>
  </section>
</template>

<script>
export default {
  props: {
    list: Array,
  },
  methods: {
    onRemove(index) {
      this.list.splice(index, 1);
    },
  },
};
</script>
