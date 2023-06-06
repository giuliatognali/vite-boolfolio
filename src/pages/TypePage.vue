<script>
import axios from 'axios';
import store from '../store';
import CardProject from '../components/CardProject.vue';
export default {
    name: "TypePage",
    data() {
        return {
            store,
            type: null
        };
    },
    methods: {
        getType() {
            axios.get(`${this.store.apiBaseUrl}/types/${this.$route.params.slug}`)
                .then((response) => {
                    console.log(response);
                    this.type = response.data.results;
                });
        }
    },
    created() {
        this.getType();
        
        this.$watch(  //quando cambia il parametro rifai la chiamata getType
        ()=> this.$route.params,
        (toParams, previouseParams)=>{
            this.getType();
        }
        )
    },
    components: {
        CardProject
    }
}
</script>

<template>
    <section v-if="type">
        <div class="container">
            <h1>Type page: {{ type.name }}</h1>
            <div class="row my-4 gy-4">
                <div class="col col-md-4" v-for="project in type.projects">
                    <CardProject :project="project" />
                </div>
            </div>
        </div>
    </section>
</template>