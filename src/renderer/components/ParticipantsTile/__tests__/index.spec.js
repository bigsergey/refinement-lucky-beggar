import { shallowMount } from '@vue/test-utils';
import AddParticipant from '../AddParticipant.vue';

describe('AddParticipant.vue', () => {
  it('should be true', () => {
    const wrapper = shallowMount(AddParticipant);

    expect(wrapper.is(AddParticipant)).to.be.true;
  });
});
