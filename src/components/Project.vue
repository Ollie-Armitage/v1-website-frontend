<template>
  <div v-if="project">
    <v-img
        ref="background"
        dark
        src="@/assets/train_station.jpg"
        :height="'calc(100vh - ' + $vuetify.application.top + 'px)'"
    >
      <v-container fluid>
        <v-row class="justify-center">
          <v-card max-width="1000" elevation="10" outlined>
          <span
              :class="[$vuetify.breakpoint.smAndDown ? 'display-1' : 'display-2']"
              class="font-weight-light text-decoration-underline text-capitalize"

          >
          <v-card-title
              :class="[$vuetify.breakpoint.smAndDown ? 'display-1' : 'display-2']"
              class="text-decoration-underline justify-center font-weight-light">{{project.title}}</v-card-title>
          </span>
            <v-card-text class="text-center font-weight-light text-h6">
              {{project.subtitle}}
            </v-card-text>

            <v-row class="justify-center">
              <v-col cols="12" md="6">
                <v-img max-height="500" max-width="500" class="rounded"
                       v-if="project.imageLink && project.imageLink !== ''"
                       :src="project.imageLink"></v-img>
              </v-col>
            </v-row>

            <v-card-text class="text-center font-weight-thin text-body-1">
              {{project.description}}
            </v-card-text>

            <v-divider></v-divider>

            <v-card-actions>
              <v-spacer></v-spacer>

              <v-tooltip top v-if="project.githubLink">
                <template v-slot:activator="{ on, attrs}">
                  <v-btn
                      :href="project.githubLink"
                      class="mr-2"
                      v-bind="attrs"
                      v-on="on"
                      icon>
                    <v-icon large>mdi-github</v-icon>
                  </v-btn>
                </template>
                <span>Github</span>
              </v-tooltip>

              <v-tooltip top>
                <template v-slot:activator="{ on, attrs }">
                  <v-btn
                      to="/"
                      class="mr-2"
                      v-bind="attrs"
                      v-on="on"
                      icon>
                    <v-icon large>mdi-exit-to-app</v-icon>
                  </v-btn>
                </template>
                <span>Home</span>
              </v-tooltip>
            </v-card-actions>
          </v-card>
        </v-row>

      </v-container>
    </v-img>
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
