<script>
import axios from 'axios';
export default {
    name: 'ProjectDetail',
    data() {
        return {
            apiBaseUrl: 'http://127.0.0.1:8000/api',
            apiUrls: {
                projects: '/projects'
            },
            project: []
        }
    },
    methods: {
        getProject() {
            axios.get(this.apiBaseUrl + this.apiUrls.projects + "/" + this.$route.params.slug)
                .then((response) => {
                    console.log(response);
                    this.project = response.data.results;
                })
                .catch((error) => {
                    console.log(error);
                })
        }
    },
    created() {
        this.getProject();
    }
}
</script>

<template>
    <section v-if="project">
        <div class="container">
            <h1>{{ project.name }}</h1>
            <p>{{ project.content }}</p>
        </div>

    </section>
</template>

