<template lang="html">
  <div class="login">
    <form>
      <div class="form-group">
        <label for="exampleInputUsername1" >Username</label>
        <input class="form-control" id="exampleInputUserName1" placeholder="Username" v-model="username">
      </div>
      <div class="form-group">
        <label for="exampleInputPassword1" >Password</label>
        <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password" v-model="password">
      </div>
      <button type="submit" class="btn btn-default">  <router-link to="/todos">Log in</router-link></button>
      <button type="botton" @click="newUser({username: username, password: password}); getAllUsers" class="btn btn-default">Register</button>
    </form>
    {{ allUsersGetter }}
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

export default {
  data () {
    mapGetters(['username', 'password'])
  },
  computed: mapGetters(['allUsersGetter']),
  mounted () {
    this.getAllUsers()
  },
  methods: mapActions([
    'getAllUsers',
    'newUser'
  ])
}
</script>

<style lang="css">
.login {
  width: 50%;
  margin: auto;
}
</style>
