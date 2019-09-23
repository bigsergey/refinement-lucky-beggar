<template>
  <div>
    <h1>Welcome to our meeting!</h1>
    <participant-list v-bind:list="participantList"></participant-list>
    <add-person :onAdded="onParticipantAdded"></add-person>
  </div>
</template>

<script>
  import AddPerson from './AddPerson';
  import ParticipantList from './ParticipantList';

  export default {
    components: { AddPerson, ParticipantList },
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
