<template>
  <section class="tile is-parent">
    <div class="tile is-child box">
      <h3 class="title">Lets generate lucky beggar</h3>

      <b-button
        class="is-fullwidth"
        type="is-primary"
        size="is-medium"
        icon-right="account-convert"
      >Generate</b-button>
    </div>
  </section>
</template>

<script>
export default {
  props: {
    participantList: { type: Array },
  },
};
</script>
