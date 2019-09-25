<template>
  <section class="tile is-parent">
    <div class="tile is-child box">
      <h3 class="title">Lets generate lucky beggar</h3>

      <b-button
        class="is-fullwidth"
        type="is-primary"
        size="is-medium"
        icon-right="account-convert"
        @click="getRandomItem"
      >Generate</b-button>

      <ul v-if="luckyBeggarList.length > 0">
        <li v-for="(item, index) in luckyBeggarList" v-bind:key="index">{{item}}</li>
      </ul>
    </div>
  </section>
</template>

<script>
export default {
  props: {
    participantList: { type: Array },
  },
  data() {
    return {
      luckyBeggarList: [],
    };
  },
  methods: {
    getRandomItem() {
      const maxIndex = this.participantList.length;
      const randomIndex = Math.floor(Math.random() * maxIndex);
      this.luckyBeggarList.push(this.participantList[randomIndex]);
    },
  },
};
</script>

