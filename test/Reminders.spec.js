import {mount} from '@vue/test-utils'
import Reminders from '../src/components/Reminders.vue'

/* global beforeEach describe it expect */
/* eslint no-undef: "error" */
describe('Reminders', () => {
  let wrapper

  beforeEach(() => {
    wrapper = mount(Reminders)
  })

  it('hides the reminders list if there are none', () => {
    expect(wrapper.contains('ul')).toBe(false)
  })

  it('can add reminders', () => {
    addReminder('text sample 1')
    expect(reminderList()).toContain('text sample 1')
  })

  it('can remove any reminder', () => {
    addReminder('text sample 1')
    addReminder('text sample 2')
    let deleteButton = wrapper.find('ul >li:first-child .remove')
    deleteButton.trigger('click')
    expect(reminderList()).not.toContain('text sample 1')
    expect(reminderList()).toContain('text sample 2')
  })

  function addReminder (body) {
    let newReminder = wrapper.find('.new-reminder')
    newReminder.element.value = body
    newReminder.trigger('input')
    wrapper.find('button').trigger('click')
  }

  function reminderList () {
    return wrapper.find('ul').text()
  }
})
