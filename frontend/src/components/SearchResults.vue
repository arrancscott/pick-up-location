<template>
  <div id="results">
    <ul>
      <li v-for="result in this.results" :key="result.index" :class="result.placeType && 'result-li'">
        <div class="results-container">
          <div v-if="result.placeType" class="content result-type">
            <span :style="`background-color: ${objForPlaceType(result.placeType).bgColor}`">{{ objForPlaceType(result.placeType).name }}</span>
          </div>
          <div class="content">
            <p>{{ result.name }}</p>
            <small v-if="(result.city || result.region) && result.country">{{ (result.city || result.region) }}, {{ result.country }}</small>
            <small v-else>{{ result.region || result.country }}</small>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    props: {
      results: Array
    },

    methods: {
      objForPlaceType: function(placeType) {
        const obj = {}
        switch (placeType.toLowerCase()) {
          case 'a':
            obj.name = 'Airport'
            obj.bgColor = '#FA8181'
            break
          case 'c':
            obj.name = 'City'
            obj.bgColor = '#60B8F7'
            break
          case 't':
            obj.name = 'Station'
            obj.bgColor = '#9C9CBA'
            break
          case 'd':
            obj.name = 'District'
            obj.bgColor = '#62D592'
            break
        }
        return obj
      }
    }
  }
</script>

<style>
  #results {
    background-color: #fff;
  }

  ul {
    padding: 0;
    margin: 0;
  }

  ul li {
    list-style: none;
    padding: 8px;
    border-bottom: 1px solid #F1F1F1;
  }
  
  ul li.result-li:hover {
    background-color: #DDF6FE;
    cursor: pointer;
  }

  ul li:not(.result-li) .content p {
    font-style: italic;
    color: #9C9C9C;
    font-size: 14px;
  }

  .results-container {
    display: flex;
    display: -ms-flexbox;
    flex-flow: row;
  }

  .results-container .content.result-type {
    width: 50px;
  }

  .results-container .content.result-type span {
    display: block;
    width: 100%;
    color: #fff;
    text-align: center;
    padding: 2px 0;
    border-radius: 2px;
    font-size: 12px;
    margin-top: 6px;
  }

  .results-container .content:first-child {
    margin-right: 10px;
  }

  .results-container p {
    margin: 0;
  }

  .results-container small {
    color: gray;
  }
</style>