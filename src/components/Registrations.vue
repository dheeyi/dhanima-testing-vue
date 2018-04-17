<template>
  <div id="registrations">
    <div>
      <h3>Registrations</h3>
      <h5>Total: {{ total }}</h5>
    </div>
    <el-table
      :data="registrations"
      style="width: 100%"
      max-height="auto">
      <el-table-column
        prop="name"
        width="120">
      </el-table-column>
      <el-table-column>
        <template slot-scope="scope">
          <el-button type="text" @click.native.prevent="unregister(scope.$index, scope.row)">(Unregister)</el-button>
        </template>
      </el-table-column>
      <el-table-column
        prop="date"
        width="120">
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  methods: {
    unregister (index, registration) {
      this.$store.commit({
        type: 'unregister',
        userId: registration.userId
      })
    }
  },
  computed: {
    ...mapGetters({
      registrations: 'registrations',
      total: 'totalRegistrations'
    })
  }
}
</script>

<style scoped>
  #registrations {
    box-shadow: 1px 1px 2px 1px #ccc;
    margin: 20px;
    padding: 20px;
    display: inline-block;
    width: 350px;
    vertical-align: top;
  }
</style>
