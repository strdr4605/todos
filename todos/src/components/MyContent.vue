<template lang="html">
  <div class="row">
    <div class="content jumbotron col-md-6 col-xs-3">
      <div class="container">
        <router-view></router-view>
      </div><!-- /.container -->
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {}
  },
  computed: {},
  mounted () {},
  methods: {},
  components: {}
}
</script>

<style lang="css">
.content {
  margin-right: auto;
  margin-left: auto;
  border-radius: 2px;
  padding: 10px;
  position: fixed;
  top: 55px;
  bottom: 25px;
  left: 0;
  right: 0;
  overflow: auto;
}
</style>
