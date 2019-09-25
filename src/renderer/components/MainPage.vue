<template>
  <section>
    <hero title="Welcome on our meeting!" subtitle="Lets generate next lucky beggar" />

    <section class="container">
      <div class="tile is-ancestor">
        <participants-tile v-bind:list="participantList" />
      </div>
    </section>
  </section>
</template>

<script>
import Hero from './Hero';
import ParticipantsTile from './ParticipantsTile';

export default {
  components: { Hero, ParticipantsTile },
  data() {
    return {
      participantList: ['First Person', 'Second Person'],
    };
  },
};
</script>
