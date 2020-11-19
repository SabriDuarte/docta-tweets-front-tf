<template>
  <div id="app">
    <header-sab></header-sab>
    <router-view></router-view>
    <footer-sab></footer-sab>

  </div>
</template>

<script>
import HeaderSab from './components/HeaderSab';
import FooterSab from './components/FooterSab'

export default {
  name:'App',
  components: {
    HeaderSab,
    FooterSab

  }
}
</script>
<style>
  body{
    background-color: rgb(21, 32, 43);
    font-family: Arial, Helvetica, sans-serif;
    margin: 0px auto;
  }
</style>