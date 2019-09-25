<template>
  <section>
    <hero title="Welcome on our meeting!" />

    <section class="main-container container">
      <div class="tile is-ancestor">
        <randomizer-tile v-bind:participantList="participantList" />
        <participants-tile v-bind:list="participantList" />
      </div>
    </section>
  </section>
</template>

<script>
import Hero from './Hero';
import RandomizerTile from './RandomizerTile';
import ParticipantsTile from './ParticipantsTile';

export default {
  components: { Hero, ParticipantsTile, RandomizerTile },
  data() {
    return {
      participantList: ['First Person', 'Second Person'],
    };
  },
};
</script>

<style scoped>
.main-container {
  padding-top: 12px;
  padding-bottom: 12px;
}
</style>
