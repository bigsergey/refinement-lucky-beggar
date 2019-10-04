<template>
  <section class="hero is-primary">
    <div class="hero-body">
      <div class="container">
        <h1 class="title" v-if="title">
          {{title}}
        </h1>
        <h2 class="subtitle" v-if="subtitle">
          {{subtitle}}
        </h2>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  props: {
    title: { type: String },
    subtitle: { type: String },
  },
};
</script>
