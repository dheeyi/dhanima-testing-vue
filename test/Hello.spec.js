import {shallow} from '@vue/test-utils'
import Hello from '../src/components/HelloWorld'

/* global describe it expect */
/* eslint no-undef: "error" */
describe('HelloWorld.vue', () => {
  it('testing Hello World', () => {
    const wrapper = shallow(Hello)
    const message = wrapper.find('h1').text()
    expect(message).toBe('Welcome to Your Vue.js App')
  })
})
