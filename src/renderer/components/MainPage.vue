<template>
  <section>
    <hero title="Welcome on our meeting!" />

    <section class="main-container container">
      <div class="tile is-ancestor">
        <randomizer-tile />
        <participants-tile />
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
};
</script>

<style scoped>
.main-container {
  padding-top: 12px;
  padding-bottom: 12px;
}
</style>
