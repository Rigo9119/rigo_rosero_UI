import Vue from "vue";
import OpinionCard from '@/components/OpinionCard.vue'

describe('OpinonCard cmp', () => {
  let cmp, vm;

  beforeEach(() => {
    cmp = Vue.extend(OpinionCard);
    vm = new cmp({
      data: {
        name: 'Name Lastname',
        description: 'Vestibulum diam ante, porritor a odio eget, rhoncus neque. Aenean eu velit libero.',
        url: 'https://github.com/Rigo9119'
      }
    }).$mount();
  })

  it('name should be equal to data.name', () => {
    let expectedName = 'Name Lastname'
    expect(vm.name).toEqual(expectedName);
  })

  it('name should be equal to data.description', () => {
    let expectedDesc = 'Vestibulum diam ante, porritor a odio eget, rhoncus neque. Aenean eu velit libero.'
    expect(vm.description).toEqual(expectedDesc);
  })

  it('name should be equal to data.url', () => {
    let expectedUrl = 'https://github.com/Rigo9119'
    expect(vm.url).toEqual(expectedUrl);
  })
});
