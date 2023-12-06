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
        "overview",
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
                default: '/flags/default.svg',

            };
            return flagMapping[this.original_language] || flagMapping["default"];
        },

        //Method to convert the voting range which is a decimal value from 1-10 to 1-5 in integer value
        convertToInteger(voteAverage) {
            const scaledValue = (voteAverage - 1) * (5 / 9) + 1;
            const roundedValue = Math.round(scaledValue);
            return Math.min(5, Math.max(1, roundedValue));
        },

        printStars() {
            let stars = "";
            for (let i = 0; i < this.convertToInteger(this.vote_average); i++) {
                stars += '<i class="fa-solid fa-star" style="color: #fad000;"></i>';
            }
            return stars
        }
    }
}

</script>
<template>
    <div class="all_movie_cards">
        <div class="cover">
            <img v-if="poster_path != null" :src="posterURL + poster_sizes[3] + poster_path" alt="">
            <div class="not_found" v-else><span>Poster not found!</span></div>
        </div>
        <div class=" card">
            <ul>
                <li><strong>Title:</strong>{{ title }}</li>
                <li v-if="original_title != title"><strong>Original Title:</strong>{{ original_title }}</li>
                <li>
                    <p><strong>Original Language</strong></p><img :src="flagImagePath()" alt="">
                </li>
                <li><strong>Rating:</strong>{{ convertToInteger(vote_average) }}</li>
                <li v-html="printStars()"></li>
                <li><strong>Overview:</strong>{{ overview }}</li>
            </ul>
        </div>

    </div>
</template>

<style scoped>
.all_movie_cards {
    /*     display: flex; */
    width: 342px;
    height: 513px;
    position: relative;
}

.all_movie_cards:hover .card {
    visibility: visible;
}

.all_movie_cards:hover .cover {
    opacity: 0.2;
}

.card {
    /* margin: 1rem; */

    width: 342px;
    height: 513px;
    position: absolute;
    top: 0;
    visibility: hidden;
}

.not_found {
    width: 342px;
    height: 513px;
    text-align: center;
    font-size: 5rem;
    background-color: crimson;
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

strong {
    padding-right: 0.25rem;
}

p {
    padding-bottom: 0.2rem;
}
</style>