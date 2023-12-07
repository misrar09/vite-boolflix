import { reactive } from 'vue'

export const store = reactive({

    userQuery: "",
    movie_id: "",
    moviesResultList: [],
    tvResultList: [],
    personResultList: [],
    firstFiveActors: []

});