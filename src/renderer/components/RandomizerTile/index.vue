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
        :disabled="list.length === 0"
      >Generate</b-button>

      <lucky-beggar-list :luckyBeggarList="luckyBeggarList"/>
    </div>
  </section>
</template>

<script>
import { mapGetters } from 'vuex';
import LuckyBeggarList from './LuckyBeggarList';

export default {
  components: { LuckyBeggarList },
  computed: mapGetters({
    list: 'getParticipantList',
    luckyBeggarList: 'getLuckyBeggarList',
  }),
  methods: {
    getRandomItem() {
      const maxIndex = this.list.length;
      const randomIndex = Math.floor(Math.random() * maxIndex);

      this.$store.commit('ADD_LUCKY_BEGGAR', this.list[randomIndex]);
    },
  },
};
</script>
