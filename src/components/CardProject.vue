<script>
export default {
  name: 'CardProject',
  props: {
    project: Object
  }
}
</script>

<template>
  <div class="card">
    <img v-if="project.image" :src="project.image" class="card-img-top" alt="...">
    <div class="card-body">
      <h5 class="card-title">{{ project.name }}</h5>
      <p v-if="project.content" class="card-text">{{ project.content.substring(0, 150) + '...' }}</p>
      <a href="#" class="btn btn-primary">Go somewhere</a>
    </div>
  </div>
</template>

<style lang="scss" scoped>
h1 {
  color: blue
}
</style>
