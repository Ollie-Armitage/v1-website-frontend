<template>
  <v-app>
    <router-view></router-view>
  </v-app>
</template>

<script>

import { mapActions } from 'vuex'

export default {
  name: 'App',
  methods: {
    ...mapActions(['fetchProjects'])
  },
  data: () => ({
    projects: []
  }),
  beforeMount(){
    this.fetchProjects();
  }

};
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');
</style>
