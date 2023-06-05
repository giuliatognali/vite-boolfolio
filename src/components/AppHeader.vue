<script>
export default {
  name: 'AppHeader'
}
</script>

<template>
  <header>
    <div class="container">
      <h1>Header</h1>
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
                        </ul>
    </div>
  </header>
</template>

<style lang="scss" scoped></style>
