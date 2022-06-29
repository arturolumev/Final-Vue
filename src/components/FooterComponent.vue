<template>
  <v-footer padless>
    <v-col lg="12">
      <v-row justify="center">
        <v-col lg="4" class="text-center">
          <v-toolbar-title>COD|NG</v-toolbar-title>
          <v-card-text>
            <v-btn
                v-for="icon in icons"
                :key="icon"
                class="mx-4 black--text"
                icon
            >
              <v-icon size="24px">
                {{ icon }}
              </v-icon>
            </v-btn>
          </v-card-text>
          <v-subheader>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua.
          </v-subheader>
        </v-col>

      </v-row>
      <div class="mt-10">
        <v-divider></v-divider>
        <v-subheader>Copyright (c) 2003 Coding All Rights Reserved. {{ new Date().getFullYear() }} — <strong>Vuetify</strong>
          <v-spacer/>
          <strong>Designed by <u>Group Name</u></strong>
        </v-subheader>
      </div>
    </v-col>
  </v-footer>
</template>

<script>
export default {
  name: "FooterView",
  data: () => ({
    icons: [
      'mdi-facebook',
      'mdi-twitter',
      'mdi-linkedin',
      'mdi-instagram',
    ],
  }),
}
</script>

<style scoped>
.v-toolbar__title {
  font-size: 32px;
  color: indigo;
  font-weight: 700;
}
</style>
