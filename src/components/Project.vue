<template>
  <div v-if="project">
    <v-card>
      <v-card-title :title="project.title"></v-card-title>
    </v-card>
  </div>
</template>

<script>

import {mapActions, mapGetters} from "vuex";

export default {
  name: "Project",
  data: () => {
    return{
      project: null
    }
  },
  computed: {... mapGetters(['getProject', 'allProjects'])},
  methods: {    ... mapActions(['fetchProjects']) },
  async mounted() {

    if(this.allProjects.length === 0) {
      await this.fetchProjects()
    }

    this.project = this.getProject(this.$route.params.project_id)
  }
}
</script>

<style scoped>

</style>
