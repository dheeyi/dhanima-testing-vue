<template>
  <div>
    <input type="text" class="coupon-code" v-model="code" @input="validate">
    <p v-if="valid">Coupon Redeemed : {{ message }}</p>
  </div>
</template>

<script>
export default {
  data () {
    return {
      code: '',
      coupons: [
        {
          code: '500FF',
          message: '50% Off!',
          discount: 50
        },
        {
          code: 'FREE',
          message: 'Entirely Free!',
          discount: 100
        }
      ],
      valid: false
    }
  },

  computed: {
    selectedCoupon () {
      return this.coupons.find(coupon => coupon.code === this.code)
    },
    message () {
      return this.selectedCoupon.message
    }
  },

  methods: {
    validate () {
      // this.valid = this.coupons.map(coupon => coupon.code).includes(this.code);
      this.valid = !!this.selectedCoupon
      if (this.valid) {
        this.$emit('APPLIED_DISCOUNT', this.selectedCoupon.discount)
      }
    }
  }
}
</script>
