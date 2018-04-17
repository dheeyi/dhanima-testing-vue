import {mount} from '@vue/test-utils'
import Question from '../src/components/Question'
import moxios from 'moxios'

/* global beforeEach afterEach describe it expect */
/* eslint no-undef: "error" */
describe('Questions', () => {
  let wrapper

  beforeEach(() => {
    moxios.install()
    wrapper = mount(Question, {
      propsData: {
        dataQuestion: {
          title: 'The title',
          body: 'The body'
        }
      }
    })
  })

  afterEach(() => {
    moxios.uninstall()
  })

  it('presents the title and the body ', () => {
    // expect(wrapper.html()).toContain('The title')
    see('The title')
    see('The body')
  })

  it('can be edited ', () => {
    wrapper.find('#edit').trigger('click')
    expect(wrapper.find('input[name=title]').element.value).toBe('The title')
    expect(wrapper.find('textarea[name=body]').element.value).toBe('The body')
  })

  it('hides the edit button during edit mode ', () => {
    wrapper.find('#edit').trigger('click')
    expect(wrapper.contains('#edit')).toBe(false)
  })

  it('updates the question after being edited ', (done) => {
    click('#edit')

    type('input[name=title]', 'Changed title')
    type('textarea[name=body]', 'Changed body')

    moxios.stubRequest(/questions\/\d+/, {
      status: 200,
      response: {
        title: 'Changed title',
        body: 'Changed body'
      }
    })

    click('#update')

    see('Changed title')
    see('Changed body')

    moxios.wait(() => {
      see('Your question has been updated')
      done()
    })
  })

  it('can cancel out of edit mode ', () => {
    click('#edit')

    type('input[name=title]', 'Changed title')
    click('#cancel')
  })

  let see = (text, selector) => {
    let wrap = selector ? wrapper.find(selector) : wrapper
    expect(wrap.html()).toContain(text)
  }

  let type = (selector, text) => {
    let node = wrapper.find(selector)
    node.element.value = text
    node.trigger('input')
  }

  let click = selector => {
    wrapper.find(selector).trigger('click')
  }
})
