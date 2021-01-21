<template>
  <div id="app">
    <h1>Where are you going?</h1>
    <SearchBox />
  </div>
</template>

<script>
import SearchBox from './components/SearchBox'

export default {
  name: 'App',

  components: {
    SearchBox
  },

  created() {
    document.title = 'Pick-up Location'
  }
}
</script>

<style>
  #app {
    margin: 20px auto 0 auto;
    width: 550px;
    background-color: #F7CE63;
    font-family: ubuntu, Helvetica, Arial, sans-serif;
    padding: 20px;
  }

  #app h1 {
    margin-top: 0;
  }

  @media screen and (max-width: 625px) {
    #app {
      width: auto;
    }
  }
</style>
