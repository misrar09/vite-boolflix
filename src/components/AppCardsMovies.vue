<script>
import { store } from "../store";
import axios from 'axios';
export default {
    name: "AppCardsMovies",
    props: [
        "title",
        "original_title",
        "original_language",
        "vote_average",
        "poster_path",
    ],
    components: {
    },
    data() {
        return {
            store,
            axios,
            posterURL: 'https://image.tmdb.org/t/p/',
            poster_sizes: [
                "w92",
                "w154",
                "w185",
                "w342",
                "w500",
                "w780",
                "original"
            ],

        }
    },

    methods: {
        flagImagePath() {
            let flagMapping = {
                en: '/flags/us.svg',
                it: '/flags/it.svg',
                de: '/flags/de.svg',
                fr: '/flags/fr.svg',
                es: '/flags/es.svg',
                ja: '/flags/jp.svg',
                th: '/flags/th.svg',
                zh: '/flags/cn.svg',
                tl: '/flags/ph.svg',
                ur: '/flags/pk.svg',

            };
            return flagMapping[this.original_language];
        },

    }
}

</script>
<template>
    <div class="cover">
        <img v-if="poster_path != null" :src="posterURL + poster_sizes[3] + poster_path" alt="">
        <h2 v-else>Backdrop not found!</h2>
    </div>
    <div class="all_movie_cards">
        <div class=" card">
            <ul>
                <li>{{ title }}</li>
                <li v-if="original_title != title">{{ original_title }}</li>
                <li><img :src="flagImagePath()" alt=""></li>
                <li>{{ vote_average }}</li>
            </ul>
        </div>

    </div>
</template>

<style scoped>
.all_movie_cards {
    display: flex;
}

.card {
    margin: 1rem;
    background-color: aquamarine;
    width: 10rem;
}

ul {
    list-style: none;
}

li {
    padding: 0.5rem;
}

.card img {
    width: 2rem;
}
</style>