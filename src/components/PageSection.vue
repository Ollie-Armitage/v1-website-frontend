<template>
  <section :id="title">
    <v-container fluid>
      <v-row>
        <v-col cols="12">
          <div class="text-center">
            <h1>
              <span
                  :class="[$vuetify.breakpoint.smAndDown ? 'display-1' : 'display-2']"
                  class="font-weight-light text-decoration-underline"

              >
                {{ title }}
              </span>
            </h1>
          </div>

          <v-row>
            <v-col>
              <div class="text-center">
                <slot name="header-logo"></slot>
              </div>
            </v-col>
          </v-row>

          <v-row class="justify-center">
            <v-col sm="8">
              <div class="text-center title font-weight-light">
                <span
                    class="font-weight-thin"
                    style="font-family: 'Montserrat', sans-serif;">
                  <slot name="subheader"></slot>
                </span>
              </div>
            </v-col>
          </v-row>


          <v-row class="justify-center">
            <v-col sm="8">
              <div class="text-center">
                <slot name="page-content"></slot>
              </div>
            </v-col>
          </v-row>

        </v-col>
      </v-row>

      <slot></slot>

    </v-container>
  </section>
</template>

<script>
export default {
  name: "PageSection",
  props: ['title', 'centered']

}
</script>
