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

    <PageSection>
      <template v-slot:subheader>
        <span class="red--text font-weight-light">Website is currently under development! Please
          forgive
          any
          strange
          behaviour. (10/10/2020)</span>
      </template>
    </PageSection>

    <!--   About Me   -->
    <PageSection title="ABOUT ME">

      <template v-slot:header-logo>
        <v-icon x-large color="red darken-2">mdi-message-text</v-icon>
      </template>

      <template v-slot:subheader>


        Hi, I'm Ollie. I'm a recent computer science graduate of
        the University of Bath, looking to further my technological knowledge and industrial
        experience. While I find interest in many fields of computer science, The fields I tend
        towards and enjoy the most are software and web development.

        <br>

        <v-avatar
            class="ma-12"
            size="128">
          <v-img src="@/assets/Ollie.jpg"></v-img>
        </v-avatar>


        <br>

        Languages I have good experience in are C, Python, Java, Lua, JavaScript, HTML and
        CSS. I also have some experience in Haskell, Matlab and SQL. Recent projects
        I've been working on have lead me to work with technologies such as:


      </template>

      <template v-slot:page-content>
        <LinkList></LinkList>
      </template>

    </PageSection>


    <v-parallax height="300" src="@/assets/misty_forest.jpg"/>

    <!--   Blog Page   -->

    <PageSection title="BLOG">
      <template v-slot:header-logo>
        <v-icon x-large color="blue darken-2">mdi-post</v-icon>
      </template>

      <template v-slot:subheader>
        Currently in the process of designing a blog. Once the blog is implemented, I
        will be using it to to document my work. The initial aim to post once a
        month. This may change over time. The latest post is displayed below.
      </template>

      <template v-slot:page-content>
        <v-card class="pa-4" v-if="lastPostLoaded">
          <BlogPost :post="lastPost" ></BlogPost>
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

      <v-container>
        <v-row class="justify-center">
          <v-col v-for="project in top_projects" :key="project.name" sm="4">
            <v-card
                outlined
                height="400"
                max-width="400"
                class="ma-sm-auto">

              <div style="height: 85%; overflow: hidden">

                <v-card-title class="font-weight-thin">{{ project.name }}</v-card-title>
                <v-img :src="require('@/assets/' + project.image)" height="150"></v-img>

                <v-card-text class="font-weight-light">{{ project.description }}</v-card-text>
              </div>

              <div style="height: 15%">
                <v-divider class="mb-1"></v-divider>
                <v-card-actions>
                  <v-spacer></v-spacer>

                  <v-tooltip top>
                    <template v-slot:activator="{ on, attrs}">
                      <v-btn
                          :href="project.github"
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
                          :href="project.link">
                        <v-icon large>mdi-arrow-expand</v-icon>
                      </v-btn>
                    </template>
                    <span>Preview</span>
                  </v-tooltip>
                </v-card-actions>
              </div>

            </v-card>
          </v-col>
        </v-row>

        <v-row class="justify-center">
          <v-col sm="8" class="text-center title ">
            <span style="font-family: 'Montserrat', sans-serif;" class="font-weight-thin">And
              Some of my less recent or non web-based projects.</span>
          </v-col>
        </v-row>


        <v-row class="justify-center">
          <v-col sm="8">
            <v-expansion-panels accordion>
              <v-expansion-panel v-for="project in extra_projects" :key="project.name">
                <v-expansion-panel-header class="text-h6 font-weight-thin">
                  {{ project.name }}
                </v-expansion-panel-header>
                <v-expansion-panel-content class="font-weight-light pr-2">
                  <v-row>
                    <v-col cols="10">
                      {{ project.description }}
                    </v-col>

                    <v-col cols="2">
                      <v-row class="justify-end">
                        <v-tooltip top>
                          <template v-slot:activator="{ on, attrs}">
                            <v-btn
                                :href="project.github"
                                v-bind="attrs"
                                v-on="on"
                                icon>
                              <v-icon large>mdi-github</v-icon>
                            </v-btn>
                          </template>
                          <span>Github</span>
                        </v-tooltip>

                      </v-row>
                    </v-col>
                  </v-row>

                </v-expansion-panel-content>

              </v-expansion-panel>
            </v-expansion-panels>
          </v-col>
        </v-row>
      </v-container>


    </PageSection>

    <v-banner></v-banner>

    <!--  Contact Me  -->
    <ContactMePage></ContactMePage>
  </v-main>
</template>

<script>
import PageSection from "@/components/PageSection";
import ContactMePage from "@/components/ContactMePage";
import LinkList from "@/components/LinkList";
import BlogService from "@/api/BlogService";
import BlogPost from "@/components/BlogPost";

export default {
  name: "HomePage",
  components: {
    BlogPost,
    LinkList,
    ContactMePage,
    PageSection,
  },

  data: () => ({
    lastPostLoaded: false,
    lastPost: {},
    top_projects: [
      {
        name: "Prototype Interactive Map",
        link: "https://polite-wave-02698c403.azurestaticapps.net",
        image: "map.png",
        description: "Prototype Interactive Map Web Application written in Vue.js.",
        github: "https://github.com/Ollie-Armitage/vue-interactive-map"
      },
      {
        name: "My Website",
        link: "/",
        image: "bus_stop.jpg",
        description: "This website! A SPA (Single Page Application) on a  MEVN (Mean, Express, " +
            "Vue, Node) full stack.",
        github: "https://github.com/Ollie-Armitage/website"
      },
    ],
    extra_projects: [
      {
        name: "Image Convolution",
        description:
            "A 2D Matrix Convolution function, taking an image and a filter (kernel) matrix, " +
            "and outputting the convolution of the two.",
        github: "https://github.com/Ollie-Armitage/convolution"
      },
      {
        name: "MPI Parallel Matrix Averaging Program",
        description:
            "A parallel C program using MPI (Message Passing Interface) threads. It takes in a " +
            "2D matrix and averages each number based on itself and the numbers surrounding it " +
            "until it stays within a precision.",
        github: "https://github.com/Ollie-Armitage/MPI-Parallel-Computing"
      },
      {
        name: "C-Interpreter",
        description:
            "Interpreter written in C for a C-like language, supporting variables, functions " +
            "(as closures), higher order functions, conditionals and comparisons. ",
        github: "https://github.com/Ollie-Armitage/C-Interpreter"
      }
    ]
  }),
  methods: {
    getLastPost: async function () {
      let post = await BlogService.getBlogPost(0)
      post = post[0]
      console.log(post)

      if (post.headerImage ===
          undefined) {
        post.headerImage = 'bus_stop.jpg'
      }

      post.date = post.createdAt

      this.lastPost = post
    },
  },
  async mounted() {
    await this.getLastPost()
    this.lastPostLoaded = true
  }
};
</script>

<style scoped>

</style>
