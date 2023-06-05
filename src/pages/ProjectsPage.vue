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
            projectPerPage: 6,
            currentProjectPerPage: 6,
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
                    console.log(response);
                    this.projects = response.data.results;
                })
                .catch((error) => {
                    console.log(error);
                });
        }
    },
    computed: {  //servono per rappresentare un'info in modo differente
        showProjects() {
            return this.projects.filter((element, index) => index < this.currentProjectPerPage)
        }
    },
    created() {
        this.getProjects(); //chiamo la funzione
    }
}
</script>

<template>
    <section>
        <h1>Projects Page</h1>
        <div class="container">
            <div class="row my-4 gy-4">
                <div class="col col-md-4" v-for="project in showProjects">
                    <CardProject :project="project" />
                </div>
            </div>
            <div class="text-center my-5">
                <button class="btn btn-primary" v-if="currentProjectPerPage <= projects.length" @click.prevent="currentProjectPerPage += projectPerPage">Load more</button>
            </div>
        </div>
    </section>
</template>