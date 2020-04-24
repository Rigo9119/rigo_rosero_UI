import { mount } from '@vue/test-utils'
import Nav from '@/components/Nav.vue'
import { shallowMount, createLocalVue, RouterLinkStub } from '@vue/test-utils';

describe('Nav', () => {
  test('is a Vue instance', () => {
    const wrapper = mount(Nav)
    expect(wrapper.isVueInstance()).toBeTruthy()
  })
})
