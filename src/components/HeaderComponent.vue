<template>
  <v-app-bar
      style="padding: 0px 90px"
      app
      color="white"
      light
      elevation="6"
      elevate-on-scroll
  >
    <v-toolbar-title>{{ titulo }}</v-toolbar-title>
    <v-spacer />
    <v-list class="d-flex align-center">
      <v-list-item class="ml-5">
        <v-btn
            small
            text
            fab
            @click="$vuetify.theme.dark = ! $vuetify.theme.dark"
        >
          <v-icon>{{ icon }}</v-icon>
        </v-btn>
      </v-list-item>
    </v-list>
  </v-app-bar>
</template>

<script>
export default {
  name: "HeaderComponent",
  data: () => ({
    titulo: 'COD|NG',
    icon: 'mdi-theme-light-dark'
  })
}
</script>

<style scoped>
  .v-toolbar__title {
    font-size: 32px;
    color: indigo;
    font-weight: 700;
  }
</style>
