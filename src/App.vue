<script>
/* import AppCardsMovies from "./components/AppCardsMovies.vue"
import AppCardsTv from "./components/AppCardsTv.vue" */
import AppCards from "./components/AppCards.vue"
import { store } from "./store";
import axios from 'axios';

export default {
  components: {
    /*     AppCardsMovies,
        AppCardsTv, */
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
          console.log("series tv", response.data);
        })
        .catch(function (error) {
          console.error(error);
        });
    },

    /*     personApiResult() {
          const options = {
            method: 'GET',
            url: 'https://api.themoviedb.org/3/search/person',
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
              store.personResultList = response.data
              console.log("cast", response.data);
            })
            .catch(function (error) {
              console.error(error);
            });
        }, */

    getAllResults() {
      this.movieApiRequest()
      this.tvApiRequest()
      /* this.personApiResult() */
    },



  },
}

</script>

<template>
  <header>
    <div class="header">
      <h2>BoolFlix</h2>
      <div>
        <input class="search_box" type="text" placeholder="Search Movies/Series Here...." v-model="store.userQuery"
          @keyup.enter="getAllResults">
        <button class="search_btn" @click="getAllResults">Search</button>
      </div>
    </div>

  </header>
  <main>
    <h3 class="category">Movies</h3>
    <div class="movies">
      <AppCards v-for="item in store.moviesResultList.results" :title="item.title" :original_title="item.original_title"
        :original_language="item.original_language" :vote_average="item.vote_average" :poster_path="item.poster_path"
        :overview="item.overview" />
      <!-- <AppCards v-for="item in store.personResultList.results" :actor_names="item.name" /> -->
    </div>
    <h3 class="category">Series</h3>
    <div class="series">
      <AppCards v-for="item in store.tvResultList.results" :name="item.name" :original_name="item.original_name"
        :original_language="item.original_language" :vote_average="item.vote_average" :poster_path="item.poster_path"
        :overview="item.overview" />
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
  color: rgb(250, 206, 206);
  margin-left: 2rem;
}

.category {
  height: 4rem;
  font-size: 3.5rem;
  text-align: center;
  margin: 1rem;
  background-color: rgb(128, 0, 43);
}


.movies,
.series {
  display: flex;
  gap: 40px;
  width: 100vw;
  height: 38rem;
  overflow-x: auto;
  overflow-y: hidden;
  margin: 1rem;
}
</style>