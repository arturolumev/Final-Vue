<template>
  <v-container>
    <v-row>
      <v-col lg="6">
        <img width="100%" src="../../assets/hero-image.jpg" alt="imagen">
      </v-col>
      <v-col lg="6">
        <v-subheader class="text-h4">Para empresas</v-subheader>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
          magna aliqua. Amet dictum sit amet justo donec enim diam vulputate. Enim sed faucibus turpis in eu mi. Nibh
          cras pulvinar mattis nunc sed blandit libero. Cras tincidunt lobortis feugiat vivamus at augue eget arcu.
          Enim sed faucibus turpis in eu mi. Nibh cras pulvinar mattis nunc sed blandit libero. Cras tincidunt lobortis
          feugiat vivamus at augue eget arcu.</p>
        <EmpresaLoginComponent/>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import EmpresaLoginComponent from "@/components/HomeComponents/EmpresaLoginComponent";
export default {
  name: "EmpresaComponent",
  components: {EmpresaLoginComponent}
}
</script>

<style scoped>

</style>
