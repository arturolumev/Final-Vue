<template>
  <v-app-bar
      style="padding: 0px 90px"
      app
      color="white"
      light
      elevation="6"
      elevate-on-scroll
  >
    <v-toolbar-title>COD|NG</v-toolbar-title>
    <v-spacer />
    <v-list class="d-flex align-center">
      <v-list-item
          link
          v-for="(menu, index) in menus"
          :key="index"
          :to="menu.route"
      >
        <v-list-item-title>{{ menu.title }}</v-list-item-title>
      </v-list-item>
      <v-list-item class="ml-5">
        <LoginComponent/>
      </v-list-item>
      <v-list-item class="ml-5">
        <v-btn
            small
            text
            fab
            @click="$vuetify.theme.dark = ! $vuetify.theme.dark"
        >
          <v-icon>mdi-theme-light-dark</v-icon>
        </v-btn>
      </v-list-item>
    </v-list>
  </v-app-bar>
</template>

<script>
import LoginComponent from "@/components/HomeComponents/LoginComponent";
export default {
  name: "HeaderView",
  components: {LoginComponent},
  data () {
    return {
      drawer: null,
      menus: [
        {title: 'Home'},
        {title: 'Sobre nosotros'},
        {title: 'Encuentra trabajo'},
      ]
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
