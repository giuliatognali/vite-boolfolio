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
            project: [],
            isError: false,
            errorMessage: null,
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

                    if (error.response.status === 404) {
                        console.log('redirect')
                        this.$router.push({ name: 'not-found' });
                    }

                    this.isError = true;
                    this.errorMessage = error.message;
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
            <h2>Type: {{ project.type.slug }}</h2>
            <p>{{ project.content }}</p>
            <div class="my-2" v-show="project.technologies.length">
                <span class="badge text-bg-info me-2" v-for="technology in project.technologies">{{ technology.name }}</span>
            </div>
        </div>
    </section>
    <section v-if="isError">
        <div class="container ">
            <p>{{ errorMessage }}</p>
        </div>
    </section>
</template>

