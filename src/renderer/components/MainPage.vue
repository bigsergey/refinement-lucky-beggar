<template>
  <section>
    <hero title="Welcome on our meeting!" subtitle="Lets generate next lucky beggar" />

    <section class="container">
      <participant-list v-bind:list="participantList"></participant-list>
      <add-participant :onAdded="onParticipantAdded"></add-participant>
    </section>
  </section>
</template>

<script>
import AddParticipant from './AddParticipant';
import ParticipantList from './ParticipantList';
import Hero from './Hero';

export default {
  components: { AddParticipant, ParticipantList, Hero },
  data() {
    return {
      participantList: ['First Person', 'Second Person'],
    };
  },
  methods: {
    onParticipantAdded(newParticipant) {
      this.participantList.push(newParticipant);
    },
  },
};
</script>
