<template>
  <section class="tile is-parent">
    <div class="tile is-child box">
      <h3 class="title">Meeting participants</h3>

      <participant-list :list="list" @remove-item="removeParticipant"></participant-list>

      <add-participant @add="addParticipant"></add-participant>
    </div>
  </section>
</template>

<script>
import AddParticipant from './AddParticipant';
import ParticipantList from './ParticipantList';

export default {
  components: { AddParticipant, ParticipantList },
  props: {
    list: { type: Array },
  },
  methods: {
    addParticipant(newParticipant) {
      this.list.push(newParticipant);
    },
    removeParticipant(index) {
      this.list.splice(index, 1);
    },
  },
};
</script>
