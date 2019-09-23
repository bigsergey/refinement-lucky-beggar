<template>
  <form @submit.prevent="handleSubmit">
    <label for="name" />
    <input v-model="name" type="text" id="name" name="name"/>
    <input type="submit" value="Add"/>
  </form>
</template>

<script>
export default {
  props: {
    onAdded: { type: Function },
  },
  data() {
    return {
      name: '',
    };
  },
  methods: {
    handleSubmit() {
      this.onAdded(this.name);
      this.name = '';
    },
  },
};
</script>
