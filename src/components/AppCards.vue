<script>
import { store } from "../store";
import axios from 'axios';
export default {
    name: "AppCards",
    props: [
        "title",
        "original_title",
        "original_language",
        "vote_count"
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
            };

            return flagMapping[this.original_language];
        },
    }
}

</script>
<template>
    <div class="all_cards">
        <div class=" card">
            <ul>
                <li>{{ title }}</li>
                <li>{{ original_title }}</li>
                <li><img :src="flagImagePath()" alt=""></li>
                <li>{{ vote_count }}</li>
            </ul>
        </div>

    </div>
</template>

<style scoped>
.all_cards {
    display: flex;
}

.card {
    margin: 1rem;
    background-color: aquamarine;
}

ul {
    list-style: none;
}

img {
    width: 2rem;
}
</style>