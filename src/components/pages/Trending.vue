<template lang="html">

  <div class="">
    <h2>trending movies</h2>
    <!-- switch -->
    <div v-for="movie in movies">

    </div>

  </div>
</template>

<script>
import Movie from '../Movie.vue'
import axios from 'axios'
import key from '../../key.js'

export default {
  name: 'Trending',
  components: {
    Movie
  },
  data: () => ({
    movies: [],
    showTv: false,
    key: key
  }),
  methods: {
    fetchTrending() {
      let trendType;
      if (this.showTv) {
        trendType = 'tv';
      } else {
        trendType = 'movie'
      }
      axios.get(`https://api.themoviedb.org/3/trending/${trendType}/week?api_key=${this.key}`)
        .then(response => this.movies = response.data.results)
    }
  },
  mounted() {
    this.fetchTrending();
  },
  watch: {
    showTv() => {
      this.fetchTrending()
    }
  }
}
</script>

<style lang="css" scoped>
</style>
