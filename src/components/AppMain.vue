<script>
import ProjectCard from './ProjectCard.vue';
export default {
  name: 'AppMain',
  props: {
    data: Object
  }
}
</script>

<template>
  <main>

    <div class="container">
      <div class="row my-4 gy-4">
        <div class="col col-md-4" v-for="project in data">
          <div class="card">
            <img v-if="project.image" :src="project.image" class="card-img-top" alt="...">
            <div class="card-body">
              <h5 class="card-title">{{ project.name }}</h5>
              <p v-if="project.content" class="card-text">{{ project.content.substring(0,150) + '...'}}</p>
              <a href="#" class="btn btn-primary">Go somewhere</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<style lang="scss" scoped>
h1 {
  color: blue
}
</style>
