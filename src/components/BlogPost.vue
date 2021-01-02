<template>
  <div>
    <v-card class="pa-4 text-left" outlined style="font-family: 'Inconsolata', monospace;">
      <v-card outlined>
        <v-img :src="require('@/assets/ajax_downloaded/' + post.headerImage + '')"
               height="100">
          <v-card-title class="font-weight-bold" style="font-size: 24px; overflow: hidden">
            <v-container class="ml-4 pa-0">
              <v-row>
                <span style="white-space: nowrap">{{ post.title }}</span>
              </v-row>
              <v-row>
              <span class="font-weight-light" style="font-size: 20px">
                {{ post.date }}
              </span>

              </v-row>
            </v-container>
          </v-card-title>
        </v-img>
      </v-card>

      <v-card-text class="font-weight-thin" style="font-size: 16px"  v-html="post.body">
      </v-card-text>

    </v-card>
  </div>

</template>

<script>
export default {
  name: "BlogPost",
  props: ['post'],
}
</script>

<style>


::v-deep .v-image__image {
  filter: blur(5px);
}

</style>
