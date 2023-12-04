<script>
import AppCards from "./components/AppCards.vue"
import { store } from "./store";
import axios from 'axios';

export default {
  components: {
    AppCards
  },
  data() {
    return {
      store,
      axios

    }
  },
  methods: {
    movieApiRequest() {
      const options = {
        method: 'GET',
        url: 'https://api.themoviedb.org/3/search/movie',
        params: { query: encodeURIComponent(this.store.userQuery).replace(/%20/g, '+'), include_adult: 'false', language: 'it-IT', page: '1' },
        headers: {
          accept: 'application/json',
          Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiNWJmOTFhNDhjZTdmN2QyNDJiOGVmNzU2NDMxZmQzNCIsInN1YiI6IjY1NmRiMWJlNjUxN2Q2MDE1MTY2M2MxOSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.8vPmdgIX7kIXK4EhrhKYFW1lPL1m4zu8Do_v3pt3ZFA'
        }
      };
      axios
        .request(options)
        .then(function (response) {
          store.resultList = response.data
          console.log(response.data);
        })
        .catch(function (error) {
          console.error(error);
        });
    },

  },
}

</script>

<template>
  <header>
    <div class="header">
      <h2>BoolFlix</h2>
      <div>
        <input class="search_box" type="text" v-model="store.userQuery">
        <button class="search_btn" @click="movieApiRequest">Search</button>
      </div>
    </div>

  </header>

  <main>
    <AppCards v-for="item in store.resultList.results" :title="item.title" :original_title="item.original_title"
      :original_language="item.original_language" :vote_count="item.vote_count" />
  </main>
</template>
<style scoped>
.header {
  height: 5rem;
  background-color: crimson;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.search_box {
  width: 20rem;
  height: 2rem;
  margin-right: 1rem;
}

.search_btn {
  height: 2rem;
  width: 5rem;
  margin-right: 2rem;
}

h2 {
  text-align: center;
  color: rgb(235, 117, 117);
}
</style>