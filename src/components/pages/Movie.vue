<template lang="html">
  <div>
    <v-img :src="`https://image.tmdb.org/t/p/w500${posterPath}`" width="200"></v-img>
    <v-card-title class="headline">
      {{ title }}
    </v-card-title>
    <v-card-text>
      <div class="body-1 black--text">
        {{ releaseDate }}
      </div>
      <v-icon class="mr-1">favorite</v-icon>
      <span>{{ popularity }}</span>
      <div class="body-2">
        {{ overview }}
      </div>
      
    </v-card-text>
  </div>
</template>

<script>
export default {
  name: 'Movie',
  props: {
    id: Number,
    popularity: Number,
    posterPath: String,
    backdropPath: String,
    originalTitle: String,
    title: String,
    voteAverage: Number,
    overview: String,
    releaseDate: String
  }
}
</script>

<style lang="css" scoped>
</style>
