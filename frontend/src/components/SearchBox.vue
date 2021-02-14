<template>
  <div>
    <label for="search">Pick-up Location</label>
    <input placeholder="city, airport, station, region, district..." type="text" id="search" @keyup="handleKeyUp" v-model="searchValue">
    <p v-if="searchResult">You have chosen: {{ searchResult.name }}</p>
    <SearchResults :results=this.searchResults @liClicked="liClicked" />
  </div>
</template>

<script>
import SearchResults from "@/components/SearchResults";
import axios from 'axios'
import debounce from 'debounce'

export default {
  data() {
    return {
      searchValue: '',
      searchResults: null,
      searchResult: ''
    }
  },

  components: {
    SearchResults
  },

  methods: {
    handleKeyUp: function () {
      this.searchResult = ''
      if (this.searchValue.length < 2) {
        this.searchResults = null
        return
      }

      debounce(this.getData, 500)()
    },

    getData: function() {
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
    },

    liClicked: function(result) {
      this.searchValue = ''
      this.searchResult = result
      this.searchResults = null
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

  #search + p {
    margin-bottom: 0;
  }
</style>