<template>
  <form class="form" @submit.prevent="handleSubmit">
    <b-field>
      <b-input type="text" placeholder="Type name" v-model="name" />
      <p class="control">
        <b-input type="submit" value="Add" />
      </p>
    </b-field>
  </form>
</template>

<script>
export default {
  data() {
    return {
      name: '',
    };
  },
  methods: {
    handleSubmit() {
      if (this.name) {
        this.$emit('add', this.name);
        this.name = '';
      }
    },
  },
};
</script>

<style scoped>
.form {
  padding-top: 12px;
}
</style>
