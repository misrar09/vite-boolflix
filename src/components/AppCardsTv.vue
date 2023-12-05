<script>
import { store } from "../store";
import axios from 'axios';
export default {
    name: "AppCardsTv",
    props: [
        "name",
        "original_name",
        "original_language",
        "vote_average",
        "poster_path",
        "overview"
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

            return flagMapping[this.original_language] || flagMapping['default'];
        },

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
    <div class="all_tv_cards">
        <div class="cover">
            <img v-if="poster_path != null" :src="posterURL + poster_sizes[3] + poster_path" alt="">
            <div class="not_found" v-else><span>Poster not found!</span></div>
        </div>
        <div class=" card_tv">
            <ul>
                <li class="name"><strong>Name:</strong> {{ name }}</li>
                <li class="original_name" v-if="original_name != name"><strong>Original Name:</strong>{{ original_name }}
                </li>
                <li class="flag">
                    <p><strong>Orignial Language</strong></p><img :src="flagImagePath()" alt="">
                </li>
                <li class="vote"><strong>Ratings:</strong>{{ convertToInteger(vote_average) }}</li>
                <li class="star" v-html="printStars()"></li>
                <li class="overview"><strong>Overview:</strong>{{ overview }}</li>
            </ul>
        </div>

    </div>
</template>

<style scoped>
.all_tv_cards {
    width: 342px;
    height: 513px;
    position: relative;
}

.all_tv_cards:hover .card_tv {

    visibility: visible;
}

.all_tv_cards:hover .cover {
    opacity: 0.2;
}

.card_tv {

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

.card_tv img {
    width: 2rem;
}

strong {
    padding-right: 0.25rem;
}

p {
    padding-bottom: 0.2rem;
}

.name {}

.original_name {}


.flag .vote {}

.star {}

.overview {}
</style>

