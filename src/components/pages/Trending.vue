<template lang="html">
  <v-container grid-list-xs,sm,md,lg,xl>
    <v-switch v-model="showTv" label="TV"></v-switch>
    <v-layout row  justify-space-between>
      <v-flex xs12 sm6 md4 lg3 v-for="movie in movies" :key="movie.id">
        <v-card  flat class="text-xs-center ma-3" height="98%">
          <Movie
            :id="movie.id"
            :popularity="movie.popularity"
            :posterPath="movie.poster_path"
            :backdropPath="movie.backdrop_path"
            :originalTitle="movie.original_language"
            :title="movie.title"
            :voteAverage="movie.vote_average"
            :overview="movie.overview"
            :releaseDate="movie.release_date"
          />
          <v-btn @click="goToMovie(movie.id)">open</v-btn>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import Movie from './Movie.vue';
import axios from 'axios';
import key from '../../key.js';

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
        trendType = 'movie';
      }

      axios.get(`https://api.themoviedb.org/3/trending/${trendType}/week?api_key=${this.key}`)
        .then(response => this.movies = response.data.results)
    }
  },
  mounted() {
    this.fetchTrending();
  },
  watch: {
    showTv() {
      this.fetchTrending();
    }
  }
}
</script>

<style lang="css" scoped>
</style>
