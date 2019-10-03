<template>
  <section class="tile is-parent">
    <div class="tile is-child box">
      <h3 class="title">Meeting participants</h3>

      <participant-list :list="list"></participant-list>

      <add-participant @on-added="onParticipantAdded"></add-participant>
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
    onParticipantAdded(newParticipant) {
      this.list.push(newParticipant);
    },
  },
};
</script>
