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
      axios

    }
  },
  methods: {



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
