<template>
  <div id="app">
    <my-header></my-header>
    <my-content></my-content>
    <my-footer></my-footer>
  </div>
</template>

<script>
import MyHeader from './components/MyHeader'
import MyFooter from './components/MyFooter'
import MyContent from './components/MyContent'

export default {
  name: 'app',
  components: {
    MyHeader,
    MyFooter,
    MyContent
  }
}
</script>

<style lang="css">
html,body
{
    height:100%;
    width:100%;
}
body
{
    display:table;
}
</style>
