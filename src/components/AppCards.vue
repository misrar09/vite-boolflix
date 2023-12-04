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
            axios
        }
    },
    methods: {

    }

}

</script>

<template>
    <div class="all_cards">
        <div class=" card">
            <p>{{ title }}</p>
            <p>{{ original_title }}</p>
            <p>{{ original_language }}</p>
            <p>{{ vote_count }}</p>
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
</style>