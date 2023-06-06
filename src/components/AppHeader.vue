<script>
import TypeList from './TypeList.vue';

export default {
  name: "AppHeader",
  components: {
    TypeList
  }
}
</script>

<template>
  <header>
    <div class="container py-3">
      <div class="d-flex justify-content-between align-items-center">
        <h1>Header</h1>
        <nav>
          <ul class="list-unstyled m-0 p-0 gap-4 d-flex align-items-center">
            <li>
              <router-link :to="{ name: 'home' }" class="nav-link">
                Home
              </router-link>
            </li>
            <li>
              <router-link :to="{ name: 'about' }" class="nav-link">
                About
              </router-link>
            </li>
            <li>
              <router-link :to="{ name: 'projects' }" class="nav-link">
                Projects
              </router-link>
            </li>
            <li>
              <TypeList />
            </li>
          </ul>
        </nav>
      </div>
    </div>
  </header>
</template>

<style lang="scss" scoped>
header {
  background-color: darkslategrey;
  color: white;
}
</style>
