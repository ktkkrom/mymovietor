<template lang="html">
    <div class="">
    <v-form v-model="valid">
          <v-col cols="12" md="4">
            <v-text-field v-model="movie" :rules="nameRules" :counter="5" label="film name" required></v-text-field>
              <v-btn color="success" :disabled="!valid" class="mr-4" @click="validate">search</v-btn>
            </v-col>
    </v-form>
    <div v-for="movie in movies" class="main-div">
      <Movie
        :popularity="movie.popularity"
        :overview="movie.overview"
        :title="movie.title"
        :voteAverage="movie.voteAverage"
        :posterPath="movie.posterPath"
        />
    </div>
    <!-- <Hello v-on:someEven="metTest($event)"/> -->
  </div>
</template>

<script>
import axios from 'axios'
import Movie from './Movie.vue'
// import Hello from './hello.vue'

export default {
  name: "SearchBar",
  components: {
    Movie,
    // Hello
  },
  data: () => ({
    valid: true,
    movie: '',
    token: `d5554197c46a4661f13b298ecc0c4aad`,
    nameRules: [
      v => !!v || 'film name is required',
      v => v.length > 5 || 'film name must be not fewer than 5 characters',
    ],
    movies: [],
    movie: ""
  }),
  methods: {
    // metTest($event) {
    //   alert(event.name)
    // },
    validate() {
      axios.get(this.searchUrl)
        .then(result => {
          result.data.results.forEach(r => {
            this.movies.push({
              popularity: r.popularity,
              overview: r.overview,
              title: r.title,
              voteAverage: r.vote_average,
              posterPath: `https://image.tmdb.org/t/p/w500/${r.poster_path}`
            })
          })
        })
      if (this.$refs.form.validate()) {
        this.snackbar = true
      }
    }
  },
  computed: {
    searchUrl() {
      return `https://api.themoviedb.org/3/search/movie?api_key=${this.token}&query=${this.movie}`
    }
  }
}
</script>

<style lang="css" scoped>

</style>
