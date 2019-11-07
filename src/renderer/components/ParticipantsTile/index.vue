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
import { mapGetters, mapMutations } from 'vuex';
import AddParticipant from './AddParticipant';
import ParticipantList from './ParticipantList';

export default {
  components: { AddParticipant, ParticipantList },
  computed: mapGetters({
    list: 'getParticipantList',
  }),
  methods: mapMutations({
    addParticipant: 'ADD_PARTICIPANT',
    removeParticipant: 'REMOVE_PARTICIPANT',
  }),
};
</script>
