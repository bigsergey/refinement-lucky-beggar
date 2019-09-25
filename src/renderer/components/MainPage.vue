<template>
  <section class="section">
    <h1>Welcome to our meeting!</h1>
    <participant-list v-bind:list="participantList"></participant-list>
    <add-participant :onAdded="onParticipantAdded"></add-participant>
  </section>
</template>

<script>
import AddParticipant from './AddParticipant';
import ParticipantList from './ParticipantList';

export default {
  components: { AddParticipant, ParticipantList },
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
