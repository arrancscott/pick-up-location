<template>
  <div>
    <label for="search">Pick-up Location</label>
    <input placeholder="city, airport, station, region, district..." type="text" id="search" @keyup="handleKeyUp" v-model="searchValue">
    <SearchResults :results=this.searchResults />
  </div>
</template>

<script>
import SearchResults from "@/components/SearchResults";
import axios from 'axios'

export default {
  data() {
    return {
      searchValue: '',
      searchResults: null
    }
  },

  components: {
    SearchResults
  },

  methods: {
    handleKeyUp: function () {
      if (this.searchValue.length < 2) {
        this.searchResults = null
        return
      }

      const baseURL = 'http://localhost:3000'
      axios
          .get(`${baseURL}/api/v1/locations/${this.searchValue}?count=6}`)
          .then(res => {
            if (res.data) {
              this.searchResults = res.data
            } else {
              console.error(res)
            }
          })
    }
  }
}
</script>

<style>
  label {
    display: block;
    margin-bottom: 5px;
    font-size: 14px;
  }

  input {
    width: 100%;
    padding: 10px;
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
    border: 1px solid #a9a9a9;
  }
</style>