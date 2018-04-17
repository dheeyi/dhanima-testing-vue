import {mount} from '@vue/test-utils'
import CouponCode from '../src/components/CouponCode.vue'

/* global beforeEach describe it expect */
/* eslint no-undef: "error" */
describe('CouponCode', () => {
  let wrapper

  beforeEach(() => {
    wrapper = mount(CouponCode)
  })

  it('accepts a coupon code', () => {
    expect(wrapper.find('input').exists()).toBe(true)
    expect(wrapper.contains('input.coupon-code')).toBe(true)
  })

  it('validate a user coupon code', () => {
    enterCouponCode('500FF')
    expect(wrapper.html()).toContain('Coupon Redeemed : 50% Off!')
  })

  it('broadcasts the percentage discount when a valid coupon code is applied', () => {
    enterCouponCode('FREE')
    expect(wrapper.emitted().APPLIED_DISCOUNT).toBeTruthy()
    expect(wrapper.emitted().APPLIED_DISCOUNT[0]).toEqual([100])
  })

  function enterCouponCode (code) {
    let couponCode = wrapper.find('input.coupon-code')
    couponCode.element.value = code
    couponCode.trigger('input')
  }
})
