<template>
  <div v-if="project">
    <v-card>
      <v-card-title :title="project.title"></v-card-title>
    </v-card>
  </div>
</template>

<script>



export default {
  name: "Project",
  props: ['project'],
  watch: {
    project: function(){
      console.log(this.project)
    }
  }
}
</script>

<style scoped>

</style>
