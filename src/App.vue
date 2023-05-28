<script>
import axios from 'axios';
import AppHeader from './components/AppHeader.vue';
import AppMain from './components/AppMain.vue';
import AppFooter from './components/AppFooter.vue';
export default {
  name: 'App',
  data() {
    return {
      apiBaseUrl: 'http://127.0.0.1:8000/api',
      apiUrls: {
        projects: '/projects'
      },
      projects: []
    }
  },
  components: {
    AppHeader,
    AppMain,
    AppFooter
  },
  methods: {
    getProjects() {   //istanzio la funzione 
      axios.get(this.apiBaseUrl + this.apiUrls.projects)
        .then((response) => {
          this.projects = response.data.results; 
        })
        .catch((error) => {
          console.log(error);
        })
    }
  },
  created() {
    this.getProjects();  //chiamo la funzione
  }
}
</script>

<template>
  <AppHeader />
  <AppMain :data="projects"/>
  <AppFooter />
</template>

<style lang="scss" scoped></style>
