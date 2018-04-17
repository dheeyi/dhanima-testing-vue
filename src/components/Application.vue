<template>
  <div>
    <app-registration></app-registration>
    <app-registrations></app-registrations>
  </div>
</template>

<script>
import AppRegistration from './Registration.vue'
import AppRegistrations from './Registrations.vue'

export default {
  components: {
    AppRegistration,
    AppRegistrations
  }
}
</script>

<style>

</style>
