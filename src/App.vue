<template>
  <v-app>
    <!-- Encabezado | NavBar -->
    <Header/>
    <v-main>
      <v-container>
      <router-view></router-view>
      </v-container>
    </v-main>
    <!-- Pie de pagina -->
    <Footer/>
  </v-app>
</template>

<script>

import Header from "@/components/HeaderComponent";
import Footer from "@/components/FooterComponent";

export default {
  name: 'App',
  drawer: null,
  components: {Footer, Header},
};
</script>
