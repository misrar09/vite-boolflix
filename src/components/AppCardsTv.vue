<script>
import { store } from "../store";
import axios from 'axios';
export default {
    name: "AppCardsTv",
    props: [
        "name",
        "original_name",
        "original_language",
        "vote_average"
    ],
    components: {
    },
    data() {
        return {
            store,
            axios,

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
    <div class="all_tv_cards">
        <div class=" card_tv">
            <ul>
                <li>{{ name }}</li>
                <li v-if="original_name != name">{{ original_name }}</li>
                <li><img :src="flagImagePath()" alt=""></li>
                <li>{{ vote_average }}</li>
            </ul>
        </div>

    </div>
</template>

<style scoped>
.all_tv_cards {
    display: flex;
}

.card_tv {
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

img {
    width: 2rem;
}
</style>

