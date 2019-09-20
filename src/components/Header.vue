<template lang="html">
  <div>
    <v-toolbar>
      <v-toolbar-title>TheMovieDB</v-toolbar-title>

      <div class="flex-grow-1"></div>

      <v-toolbar-items>
        <v-btn text><router-link class="router-link" to="/movies">Movies</router-link></v-btn>
        <v-btn text><router-link class="router-link" to="/trending">Trending</router-link></v-btn>
        <v-btn v-if="!this.$store.state.authorized"text color="success" @click="login()">Login</v-btn>
        <div v-else>
          <p> {{ $store.state.username }}
            <v-btn text color="error" @click="logout()">logout</v-btn>
          </p>
        </div>

        <!-- <v-btn text><router-link class="router-link" to="/genres">Genres</router-link></v-btn> -->
      </v-toolbar-items>
    </v-toolbar>
  </div>
</template>

<script>
import axios from 'axios';
import key from '../key.js'
export default {
  name: 'Header',
  data: () => ({
    key: key,
    username: ''
  }),
  methods: {
    login() {
      axios.get(`https://api.themoviedb.org/3/authentication/token/new?api_key=${this.key}`)
        .then(response => {
          window.open(`https://www.themoviedb.org/authenticate/${response.data.request_token}?redirect_to=http://localhost:8080/login/${response.data.request_token}`, "_self");
        })
    },
    logout() {
      localStorage.removeItem('sessionId');
      this.$store.commit('setAuthorized', false);
    }
  },
  mounted() {
    let sessionId = localStorage.getItem('sessionId');
    if (sessionId) {
      this.$store.commit('setAuthorized', true)
      axios.get(`https://api.themoviedb.org/3/account?api_key=${this.key}&session_id=${sessionId}`)
        .then(response => this.$store.commit('setUserName', response.data.username))
    }
  }
}
</script>

<style lang="css" scoped>
.router-link {
  text-decoration: none;
}
</style>
<!-- request token - eb3cf29d06ae89f117281cd05d8e22b6402bab44 -->
