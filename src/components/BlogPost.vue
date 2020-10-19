<template>
  <v-card class="pa-4 text-left" outlined >
    <v-card outlined>
      <v-img :src="require('@/assets/ajax_downloaded/' + post.headerImage + '')"
             height="100">
        <v-card-title>
          {{ post.title }}
          <v-spacer></v-spacer>
          {{ post.date }}
        </v-card-title>
      </v-img>
    </v-card>

    <v-card-text v-html="post.body">
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  name: "BlogPost",
  props: ['post'],
}
</script>

<style scoped>
::v-deep .v-image__image {
  filter: blur(5px);
}
</style>
