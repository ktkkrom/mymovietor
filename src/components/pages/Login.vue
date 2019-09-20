<template lang="html">
  <h1>welcome</h1>
</template>

<script>
import axios from 'axios';
import key from '../../key.js';

export default {
  name: 'Login',
  data: () => ({
    key: key
  }),
  mounted() {
    axios.post(`https://api.themoviedb.org/3/authentication/session/new?api_key=${this.key}`, {
        request_token: this.$route.params.requestToken
      })
      .then(response => {
        localStorage.setItem('sessionId', response.data.session_id);
        this.$store.dispatch('setAuthorization', {
          status: true,
          sessionId: response.data.session_id
        })
        this.$router.push('/');
      })
  }
}
</script>

<style lang="css" scoped>
</style>
