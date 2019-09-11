
<template>
<v-app>
  <v-content>
    <Header />
    <Search />
    <About />
  </v-content>
</v-app>
</template>

<script>
import Search from './components/Search';
import Header from './components/Header';
import About from './components/About';
export default {
  name: 'App',
  components: {
    Search,
    Header,
    About
  },
  data: () => ({
    //
  }),
};
</script>
