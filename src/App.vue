<script>
import AppCardsMovies from "./components/AppCardsMovies.vue"
import AppCardsTv from "./components/AppCardsTv.vue"
import { store } from "./store";
import axios from 'axios';

export default {
  components: {
    AppCardsMovies,
    AppCardsTv,
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
        params: {
          query: this.store.userQuery, include_adult: 'false', language: 'it-IT', page: '1',
          api_key: 'b5bf91a48ce7f7d242b8ef756431fd34',
        },
        headers: {
          accept: 'application/json',
        }
      };
      axios
        .request(options)
        .then(function (response) {
          store.moviesResultList = response.data
          console.log("movies", response.data);
        })
        .catch(function (error) {
          console.error(error);
        });
    },

    tvApiRequest() {

      const options = {
        method: 'GET',
        url: 'https://api.themoviedb.org/3/search/tv',
        params: {
          query: this.store.userQuery, include_adult: 'false', language: 'en-US', page: '1',
          api_key: 'b5bf91a48ce7f7d242b8ef756431fd34',
        },
        headers: {
          accept: 'application/json',
        }
      };

      axios
        .request(options)
        .then(function (response) {
          store.tvResultList = response.data
          console.log("series", response.data);
        })
        .catch(function (error) {
          console.error(error);
        });
    },

    getAllResults() {
      this.movieApiRequest()
      this.tvApiRequest()
    }

  },
}

</script>

<template>
  <header>
    <div class="header">
      <h2>BoolFlix</h2>
      <div>
        <input class="search_box" type="text" v-model="store.userQuery">
        <button class="search_btn" @click="getAllResults">Search</button>
      </div>
    </div>

  </header>

  <main>
    <h3>Movies</h3>
    <div class="movies">
      <AppCardsMovies v-for="item in store.moviesResultList.results" :title="item.title"
        :original_title="item.original_title" :original_language="item.original_language"
        :vote_average="item.vote_average" :poster_path="item.poster_path" />
    </div>
    <h3>Series</h3>
    <div class="series">
      <AppCardsTv v-for="item in store.tvResultList.results" :name="item.name" :original_name="item.original_name"
        :original_language="item.original_language" :vote_average="item.vote_average" :poster_path="item.poster_path" />
    </div>
  </main>
</template>

<style lang="scss">
@use "./styles/general.scss";
</style>

<style lang="scss" scoped>
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


.movies {
  display: flex;
  gap: 50px;
  width: 100vw;
  overflow-x: auto;
}

.series {
  display: flex;
  gap: 50px;
  width: 100vw;
  overflow-x: auto;
}
</style>