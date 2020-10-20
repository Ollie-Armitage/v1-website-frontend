<template>
  <PageSection title="CONTACT ME">
    <template v-slot:header-logo>
      <v-icon x-large color="brown darken-1">mdi-email</v-icon>
    </template>

    <template v-slot:subheader>
      If you wish to contact me, please email me through <a class="font-weight-medium"
                                                            href="mailto:oliverrarmitage@gmail.com">oliverrarmitage@gmail.com</a>,
      OR alternatively
      submit a
      message below.
    </template>

    <template v-slot:page-content>
      <v-form>
        <v-container>

          <v-row>
            <v-text-field
                :error="errors.includes('name')"
                type="text"
                outlined
                v-model="ticket.name"
                label="Name">
            </v-text-field>
          </v-row>

          <v-row>
            <v-text-field
                :error="errors.includes('email')"
                type="email"
                outlined
                v-model="ticket.email" label="Email">
            </v-text-field>
          </v-row>

          <v-row>
            <v-text-field
                :error="errors.includes('subject')"
                type="text"
                outlined
                v-model="ticket.subject"
                label="Subject">
            </v-text-field>
          </v-row>

          <v-row>
            <v-textarea
                :error="errors.includes('message')"
                type="text"
                outlined
                v-model="ticket.message"
                label="Enter Message Here">
            </v-textarea>
          </v-row>

          <v-row class="justify-center">
            <v-btn :loading="submitting" large @click="submitButton()" class="primary darken-2">
              Submit
            </v-btn>
          </v-row>

          <v-snackbar
              v-model="submittedAlert">
            Message Sent.

            <template v-slot:action="{ attrs }">
              <v-btn
                  icon
                  color="pink"
                  text
                  v-bind="attrs"
                  @click="submittedAlert = false"
              >
                <v-icon>mdi-close</v-icon>

              </v-btn>
            </template>

          </v-snackbar>

        </v-container>
        <v-alert
            v-if="errors.length > 0"
            outlined
            dense
            type="error">
          Please fill in all the required fields.
        </v-alert>
      </v-form>
    </template>
  </PageSection>
</template>

<script>

import PageSection from "@/components/PageSection";
import PostService from "@/api/SubmitService"

export default {
  name: "ContactMePage",
  components: {
    PageSection
  },
  data: function () {
    return {
      errors: [],
      ticket: {
        name: null,
        email: null,
        subject: null,
        message: null,
      },
      submitting: false,
      submittedAlert: false
    }
  },
  methods: {
    submitButton: async function () {
      this.errors = []
      this.submitting = true
      if(this.checkForm()){
        await PostService.insertSubmit(this.ticket)
        this.submittedAlert = true
      }
      this.submitting = false

    },
    checkForm: function () {

      this.requiredFields = ["name", "email", "subject", "message"]

      this.requiredFields.forEach((field) => {
        if (!this.ticket[field]) this.errors.push(field)
      })

      return this.errors.length <= 0;

    }
  }

}
</script>

<style scoped>

</style>
