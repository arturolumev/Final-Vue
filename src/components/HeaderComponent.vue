<template>
  <v-app-bar
      style="padding: 0px 90px"
      color= "#E2DAF3"
      app
      light
      elevation="6"
      elevate-on-scroll
  >
    <v-toolbar-title>{{ titulo }}</v-toolbar-title>
    <v-spacer />
    <v-btn
        small
        fab
        @click=switchTheme()
        elevation="0"
    >
      <v-icon>{{ icon }}</v-icon>
    </v-btn>
  </v-app-bar>
</template>

<script>
export default {
  name: "HeaderComponent",
  data: () => ({
    titulo: 'COD|NG',
    icon: 'mdi-theme-light-dark'
  }),
  methods: {
    switchTheme() {
      this.$vuetify.theme.dark = !this.$vuetify.theme.dark;

      localStorage.setItem('theme', this.$vuetify.theme.dark ? 'dark' : 'light');
    }
  }
}
</script>

<style scoped>
  .v-toolbar__title {
    font-size: 32px;
    color: indigo;
    font-weight: 700;
  }
</style>
