<template>
  <div id="registration">
    <h3>Register here</h3>
    <el-table
      :data="users"
      style="width: 100%"
      max-height="auto">
      <el-table-column
        prop="name"
        width="120">
      </el-table-column>
      <el-table-column>
        <template slot-scope="scope">
          <el-button type="success" @click.native.prevent="registerUser(scope.$index, scope.row)">Register</el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  computed: {
    users () {
      return this.$store.getters.unregisteredUsers
    }
  },
  methods: {
    registerUser (index, user) {
      this.$store.dispatch('register', user.id)
    }
  }
}
</script>

<style scoped>
  #registration {
    box-shadow: 1px 1px 2px 1px #ccc;
    margin: 20px;
    padding: 20px;
    display: inline-block;
    width: 350px;
    vertical-align: top;
  }
</style>
