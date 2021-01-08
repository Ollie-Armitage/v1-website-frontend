<template>
  <v-main>

    <!--   Hero Page   -->
    <section>
      <v-img
          ref="background"
          dark
          src="@/assets/bus_stop.jpg"
          :height="'calc(100vh - ' + $vuetify.application.top + 'px)'"
      >

        <v-container class="ma-sm-4 ma-md-0">
          <v-row>
            <v-col>
              <h1>
                <span
                    :class="[$vuetify.breakpoint.smAndDown ? 'display-1' : 'display-2']"
                    class="font-weight-light text-no-wrap"
                >
                  OLLIE ARMITAGE
                </span>
                <br>
                <span
                    :class="[$vuetify.breakpoint.smAndDown ? 'display-3': 'display-4']"
                    class="font-weight-medium"
                >
                      PORTFOLIO
                    </span>
              </h1>
            </v-col>
          </v-row>
        </v-container>
      </v-img>
    </section>

    <!--   About Me   -->
    <PageSection title="ABOUT ME">

      <template v-slot:header-logo>
        <v-icon x-large color="red darken-2">mdi-message-text</v-icon>
      </template>

      <template v-slot:subheader>


        Hi, I'm Ollie. I'm a recent computer science graduate of
        the University of Bath, looking to further my technological knowledge and industrial
        experience. While I find interest in many fields of computer science, those I tend
        towards and enjoy the most are software and web development.

        <br>

        <v-avatar
            class="ma-12"
            size="128">
          <v-img src="@/assets/Ollie.jpg"></v-img>
        </v-avatar>


        <br>

        I have experience in a wide range of computer languages from both university and recreational
        experience including: C, C++, Python, Java, Lua, JavaScript, HTML and CSS. Recent projects
        I've been working on have led me to work with technologies such as:

      </template>

      <template v-slot:page-content>
        <ProjectList></ProjectList>
      </template>

    </PageSection>


    <v-parallax height="300" src="@/assets/misty_forest.jpg"/>

    <!--   Blog Page   -->

    <PageSection title="BLOG">
      <template v-slot:header-logo>
        <v-icon x-large color="blue darken-2">mdi-post</v-icon>
      </template>

      <template v-slot:subheader>
        I'll be using this blog to document my work. The initial aim is to post once a month
        regarding my experience of technologies I've been using. This may change over time.
      </template>

      <template v-slot:page-content class="hidden-sm-and-down">
        <v-card class="pa-4" v-if="allBlogPosts.length !== 0">
          <BlogPost :post="allBlogPosts[0]"></BlogPost>
        </v-card>
        <v-card class="pa-4" v-else>
          <v-progress-circular indeterminate color="white" ></v-progress-circular>
        </v-card>

        <v-btn
            to="/blog"
            class="mt-5 primary darken-2">Blog
        </v-btn>
      </template>
    </PageSection>

    <v-banner></v-banner>

    <!--   Projects Page   -->

    <PageSection title="PROJECTS">
      <template v-slot:header-logo>
        <v-icon x-large color="green darken-2">mdi-folder-multiple</v-icon>
      </template>

      <template v-slot:subheader>
        Take a look at some of my recent web-based projects.
      </template>


      <v-container v-if="allProjects.length !== 0" >
        <v-row class="justify-center">



          <v-col v-for="project in allProjects.slice(0, 2)" :key="project.id" sm="4">
            <v-card
                outlined
                height="400"
                max-width="400"
                class="ma-sm-auto">

              <div style="height: 85%; overflow: hidden">

                <v-card-title class="font-weight-thin">{{ project.title }}</v-card-title>
                <v-img :src="project.imageLink" height="150"></v-img>

                <v-card-text class="font-weight-light">{{ project.subtitle }}</v-card-text>
              </div>

              <div style="height: 15%">
                <v-divider class="mb-1"></v-divider>
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
                    <template v-slot:activator="{on, attrs}">
                      <v-btn
                          v-bind="attrs"
                          v-on="on"
                          icon
                      :to="{ name: 'project', params: {project_id: project.project_id}}">
                        <v-icon large>mdi-arrow-expand</v-icon>
                      </v-btn>
                    </template>
                    <span>More Info</span>
                  </v-tooltip>
                </v-card-actions>
              </div>

            </v-card>
          </v-col>
        </v-row>

        <v-row class="justify-center">
          <v-col sm="8" class="text-center title ">
            <span style="font-family: 'Montserrat', sans-serif;" class="font-weight-thin">And
              Some of my non web-based projects.</span>
          </v-col>
        </v-row>


        <v-row class="justify-center">
          <v-col sm="8">
            <v-expansion-panels accordion>
              <v-expansion-panel v-for="project in allProjects.slice(2)" :key="project.id">
                <v-expansion-panel-header class="text-h6 font-weight-thin">
                  {{ project.title }}
                </v-expansion-panel-header>
                <v-expansion-panel-content class="font-weight-light pr-2">

                  <v-row>
                    <v-col cols="10">
                      {{ project.subtitle }}
                    </v-col>

                    <v-col cols="2">
                      <v-row class="justify-end" v-if="project.githubLink">
                        <v-tooltip top>
                          <template v-slot:activator="{on, attrs}">
                            <v-btn
                                class="ma-1"
                                :href="project.githubLink"
                                v-bind="attrs"
                                v-on="on"
                                icon>
                              <v-icon large>mdi-github</v-icon>
                            </v-btn>
                          </template>
                          <span>Github</span>
                        </v-tooltip>

                        <router-link :to="{ name: 'project', params: {project_id: project.project_id}}">
                          <v-tooltip top>
                            <template v-slot:activator="{on, attrs}">
                              <v-btn
                                  class="ma-1"
                                  v-bind="attrs"
                                  v-on="on"
                                  icon>
                                <v-icon large>mdi-arrow-expand</v-icon>
                              </v-btn>
                            </template>
                            <span>More Info</span>
                          </v-tooltip>
                        </router-link>
                      </v-row>
                    </v-col>
                  </v-row>

                </v-expansion-panel-content>

              </v-expansion-panel>
            </v-expansion-panels>

          </v-col>

        </v-row>
      </v-container>
      <v-container v-else>
        <v-row class="justify-center">
          <v-progress-circular indeterminate color="white" ></v-progress-circular>
        </v-row>
      </v-container>


    </PageSection>

    <v-banner></v-banner>

    <!--  Contact Me  -->
    <ContactMeSection></ContactMeSection>
  </v-main>
</template>

<script>
import PageSection from "@/components/PageSection";
import ContactMeSection from "@/components/ContactMeSection";
import ProjectList from "@/components/ProjectList";
import {mapActions, mapGetters} from 'vuex'
import BlogPost from "@/components/BlogPost";

export default {
  name: "HomePage",
  components: {
    BlogPost,
    ProjectList,
    ContactMeSection,
    PageSection,
  },
  computed: { ... mapGetters(['allProjects', 'allBlogPosts'])},
  methods: {... mapActions(['fetchBlogPosts']),
  },
  async created(){
    if(this.allBlogPosts.length === 0){
      await this.fetchBlogPosts()
    }
  }


};
</script>
