<script>
import AppHeader from "./components/AppHeader.vue";
import { store } from "./store";
import axios from 'axios';

export default {
  components: {
    AppHeader,
  },
  data() {
    return {
      store,

    }
  },
  methods: {

    /*     movieApiRequest() {
          const options = {
            method: 'GET',
            url: 'https://api.themoviedb.org/3/search/movie',
            params: { query: 'lucy', include_adult: 'false', language: 'it-IT', page: '1' },
            headers: {
              accept: 'application/json',
              Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiNWJmOTFhNDhjZTdmN2QyNDJiOGVmNzU2NDMxZmQzNCIsInN1YiI6IjY1NmRiMWJlNjUxN2Q2MDE1MTY2M2MxOSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.8vPmdgIX7kIXK4EhrhKYFW1lPL1m4zu8Do_v3pt3ZFA'
            }
          };
    
          axios
            .request(options)
            .then(function (response) {
              console.log(response.data);
            })
            .catch(function (error) {
              console.error(error);
            });
        } */


  },
  mounted() {

  },
}

</script>

<template>
  <AppHeader />

  <main>

  </main>

  <footer></footer>
</template>

<style scoped></style>
