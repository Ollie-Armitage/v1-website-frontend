<template>
  <div v-if="project">
    <v-img
        ref="background"
        dark
        src="@/assets/train_station.jpg"
        :height="'calc(100vh - ' + $vuetify.application.top + 'px)'"
    >
      <v-card>
        <v-container>
          <v-row class="justify-center">
            <v-col>
              {{ project.title }}
            </v-col>
          </v-row>
        </v-container>
      </v-card>
    </v-img>
  </div>
</template>

<script>

import {mapActions, mapGetters} from "vuex";

export default {
  name: "Project",
  data: () => {
    return {
      project: null
    }
  },
  computed: {...mapGetters(['getProject', 'allProjects'])},
  methods: {...mapActions(['fetchProjects'])},
  async mounted() {

    if (this.allProjects.length === 0) {
      await this.fetchProjects()
    }

    this.project = this.getProject(this.$route.params.project_id)
  }
}
</script>

<style scoped>

</style>
