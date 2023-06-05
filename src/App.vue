<script>

import AppHeader from './components/AppHeader.vue';
import AppFooter from './components/AppFooter.vue';

export default {
  name: 'App',
  components: {
    AppHeader,
    AppFooter
  }
}
</script>

<template>
  <AppHeader />
<!--   <AppMain :data="projects"/> -->
<router-view></router-view>
  <AppFooter />
</template>

<style lang="scss" scoped></style>
