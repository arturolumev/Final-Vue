<template>
  <v-container class="pb-15">
    <v-row>
      <v-col lg="6">
        <h2 class="intro-text">Bienvenido a <br>COD|NG</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
          magna aliqua. Amet dictum sit amet justo donec enim diam vulputate. Enim sed faucibus turpis in eu mi. Nibh
          cras pulvinar mattis nunc sed blandit libero. Cras tincidunt lobortis feugiat vivamus at augue eget arcu.</p>
        <br>
        <v-list-item class="ml-5">
          <LoginComponent/>
        </v-list-item>
      </v-col>
      <v-col lg="6">
        <img width="100%" src="../../assets/hero-image.jpg">
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "HeroComponent",
  components: {
    LoginComponent: () => import('@/components/HomeComponents/LoginComponent')
  }
}
</script>

<style scoped>
  h2.intro-text {
    font-size: 60px;
    font-weight: bold;
    color: indigo;
  }
  p.description {
    font-size: 19px;
    margin: 32px 0px;
    color: #444444ba;
  }
</style>
