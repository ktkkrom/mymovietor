<template lang="html">
  <Movie
    :id="id"
    :popularity="popularity"
    :posterPath="posterPath"
    :backdropPath="backdropPath"
    :originalTitle="originalTitle"
    :title="title"
    :voteAverage="voteAverage"
    :overview="overview"
    :releaseDate="releaseDate"
    v-if="id != null"
  />
  <NotFound msg="Requested movie does not exist" v-else/>
</template>

<script>
import axios from 'axios';
import key from '../../key.js';

import Movie from './Movie.vue';
import NotFound from './NotFound.vue';

export default {
  name: 'DetailedMovie',
  components: {
    Movie,
    NotFound
  },
  data: () => ({
    id: null,
    popularity: 0,
    posterPath: '',
    backdropPath: '',
    originalTitle: '',
    title: '',
    voteAverage: 0,
    overview: '',
    releaseDate: '',
    key: key
  }),
  mounted() {
    axios.get(`https://api.themoviedb.org/3/movie/${this.$route.params.movieId}?api_key=${this.key}`)
      .then(response => {
        this.id = response.data.id;
        this.popularity = response.data.popularity;
        this.posterPath = response.data.poster_path;
        this.backdropPath = response.data.backdrop_path;
        this.originalTitle = response.data.original_title;
        this.title = response.data.title;
        this.voteAverage = response.data.vote_average;
        this.overview = response.data.overview;
        this.releaseDate = response.data.release_date;
      })
  }
}
</script>

<style lang="css" scoped>
</style>
