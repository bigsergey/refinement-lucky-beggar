<template>
  <div>
    <h1>Welcome to our meeting!</h1>
    <participant-list v-bind:list="participantList"></participant-list>
    <add-participant :onAdded="onParticipantAdded"></add-participant>
  </div>
</template>

<script>
  import AddParticipant from './AddParticipant';
  import ParticipantList from './ParticipantList';

  export default {
    components: { AddParticipant, ParticipantList },
    data() {
      return {
        participantList: [],
      };
    },
    methods: {
      onParticipantAdded(newParticipant) {
        this.participantList.push(newParticipant);
      },
    },
  };
</script>
