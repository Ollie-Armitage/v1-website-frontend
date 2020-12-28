<template>
    <v-container>
      <v-row class="justify-center">
        <v-col sm="6" md="10" lg="7" xl="5">
          <v-list class="font-weight-medium text-md-center" style="font-family:
          'Montserrat', sans-serif;"
                  outlined nav shaped>
            <v-list-item v-for="item in items" :key="item.name" :href="item.link">
              <v-list-item-avatar>
                <v-img contain :src="require('@/assets/logos/' + item.logo + '')"></v-img>
              </v-list-item-avatar>

              <v-list-item-title>{{ item.name }} <span
                  class="d-none d-md-inline font-weight-light">- {{ item.description }}
            </span></v-list-item-title>
            </v-list-item>

          </v-list>
        </v-col>
      </v-row>
    </v-container>
</template>

<script>

export default {
  name: "LinkList",
  data: function () {
    return {
      items: [
        {
          name: "Vue",
          description: "Frontend JavaScript Framework",
          link: "https://vuejs.org/",
          logo: "vue_logo.png"
        },
        {
          name: "Node",
          description: "JavaScript Runtime Environment",
          link: "https://nodejs.org/en/",
          logo: "nodejs_icon.svg"
        },
        {
          name: "MongoDB",
          description: "NoSQL Document-Oriented Databases",
          link: "https://www.mongodb.com/",
          logo: "mongodb_icon.svg"
        }
      ]
    }
  }
}
</script>

<style scoped>

</style>
