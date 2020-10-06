<template>
  <div>
    <v-container>
      <v-row class="justify-center" v-for="post in displayedPosts" :key="post._id">
        <v-col sm="10">
          <BlogPost :post="post"></BlogPost>
        </v-col>

      </v-row>
      <v-row class="justify-center">
        <v-card outlined>
          <v-container>
            <v-btn @click="getBlogPosts()" class="ma-2 primary darken-2">Show More
              Posts
            </v-btn>

            <v-btn to="/" class="ma-2 red darken-4">Home</v-btn>
          </v-container>

        </v-card>

      </v-row>

    </v-container>

  </div>
</template>

<script>
import BlogService from "@/api/BlogService";
import BlogPost from "@/components/BlogPost";

export default {
  name: "Blog",
  components: {BlogPost},
  data: function () {
    return {
      displayedPosts: [],
      counter: 0
    }
  },
  methods: {

    getBlogPosts: async function () {
      let posts = await BlogService.getBlogPost(this.counter)
      this.counter += posts.length

      posts.forEach((post) => {
        if (post.headerImage ===
            undefined) {
          post.headerImage = 'bus_stop.jpg'
        }

        post.date = post.createdAt

        this.displayedPosts.push(post)
      })
    },

  },
  async created() {
    await this.getBlogPosts()
  }
}
</script>

