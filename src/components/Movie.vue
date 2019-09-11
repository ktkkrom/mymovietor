
<template>
<v-card class="mx-auto" max-width="600">
  <img class="white--text" height="200px" :src="posterPath" width="100">
  <div>{{title}}</div>
  <img>

  <v-card-text>
    <span>popularity {{ popularity }}</span><br>
    <span class="text--primary">
      <span>vote average: {{ voteAverage}}</span><br>
      <span>overview: {{ overview}}</span>
    </span>
  </v-card-text>

  <v-card-actions>
    <v-btn text color="orange">
      Share
    </v-btn>
    <v-btn text color="orange">
      Explore
    </v-btn>
  </v-card-actions>
</v-card>
</template>

<script>
export default {
  name: 'Movie',
  props: {
    popularity: Number,
    overview: String,
    title: String,
    voteAverage: Number,
    posterPath: String
  }
}
</script>

<style lang="css" scoped>
.recipe {
  border: 1px solid green;
}
</style>
