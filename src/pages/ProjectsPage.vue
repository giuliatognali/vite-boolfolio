<script>
import axios from 'axios';
import CardProject from '../components/CardProject.vue';
export default {
    name: "ProjectsPage",
    components: {
        CardProject
    },
    data() {
        return {
            apiBaseUrl: "http://127.0.0.1:8000/api",
            apiUrls: {
                projects: "/projects"
            },
            projects: []
        };
    },
    methods: {
        getProjects() {
            axios.get(this.apiBaseUrl + this.apiUrls.projects)
                .then((response) => {
                this.projects = response.data.results;
            })
                .catch((error) => {
                console.log(error);
            });
        }
    },
    created() {
        this.getProjects(); //chiamo la funzione
    },
    components: { CardProject }
}
</script>

<template>
    <section>
        <h1>Projects Page</h1>
        <div class="container">
            <div class="row my-4 gy-4">
                <div class="col col-md-4" v-for="project in projects">
                    <CardProject :project="project"/>
                </div>
            </div>
        </div>
    </section>
</template>