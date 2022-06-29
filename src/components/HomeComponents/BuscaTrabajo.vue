<template>
  <v-container>
    <v-row class="my-15">
      <v-col lg="12" class="text-center">
        <v-subheader class="text-h4 justify-center">Encuentra trabajo rapidamente</v-subheader>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
          magna aliqua.</p>
      </v-col>
      <v-row class="mt-2">
        <v-col lg="6">
          <v-subheader class="text-h5">Miles de ofertas para desarrolladores</v-subheader>
          <p class="description">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Habitant morbi tristique senectus et netus et malesuada fames.
            Et pharetra pharetra massa massa ultricies mi quis hendrerit. Leo in vitae turpis massa sed elementum.
            Platea dictumst vestibulum rhoncus est pellentesque elit. A arcu cursus vitae congue mauris rhoncus aenean
            vel elit. Morbi tristique senectus et netus et malesuada. Libero volutpat sed cras ornare arcu dui. Nunc sed
            blandit libero volutpat. Hendrerit gravida rutrum quisque non tellus orci ac auctor augue. Morbi tristique
            senectus et netus et. Eu consequat ac felis donec et odio pellentesque diam. Eget egestas purus viverra
            accumsan in nisl. Neque volutpat ac tincidunt vitae. Vel orci porta non pulvinar neque laoreet suspendisse.
            Amet commodo nulla facilisi nullam vehicula ipsum.</p>
          <LoginComponent class="mt-8"></LoginComponent>

        </v-col>
        <v-col lg="6">
          <img width="100%" src="../../assets/hero-image.jpg">
        </v-col>
      </v-row>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "BuscaTrabajo",
  components: {
    LoginComponent: () => import('@/components/HomeComponents/LoginComponent')
  }
}
</script>

<style scoped>

</style>
