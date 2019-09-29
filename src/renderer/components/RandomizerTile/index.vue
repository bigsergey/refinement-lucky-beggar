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
        :disabled="participantList.length === 0"
      >Generate</b-button>

      <lucky-beggar-list v-bind:luckyBeggarList="luckyBeggarList"/>
    </div>
  </section>
</template>

<script>
import LuckyBeggarList from './LuckyBeggarList';

export default {
  components: { LuckyBeggarList },
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
      this.luckyBeggarList.unshift(this.participantList[randomIndex]);
    },
  },
};
</script>

