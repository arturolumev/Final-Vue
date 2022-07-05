<template>
  <v-container>
    <v-row>
      <v-col lg="6">
        <img width="100%" src="../../assets/hero-image.jpg">
      </v-col>
      <v-col lg="6">
        <v-subheader class="text-h4">{{ title }}</v-subheader>
        <v-list>
          <p>{{ subtext_t }}</p>
          <v-list-item>
            <v-icon color="indigo" class="mr-3">{{ icon_check }}</v-icon>
            <v-list-item-subtitle color="indigo">{{ check1 }}</v-list-item-subtitle>
          </v-list-item>
          <v-list-item>
            <v-icon color="indigo" class="mr-3">{{ icon_check }}</v-icon>
            <v-list-item-subtitle color="indigo">{{ check2 }}</v-list-item-subtitle>
          </v-list-item>
          <v-list-item>
            <v-icon color="indigo" class="mr-3">{{ icon_check }}</v-icon>
            <v-list-item-subtitle color="indigo">{{ check3 }}</v-list-item-subtitle>
          </v-list-item>
          <p>{{ subtext_b }}</p>
        </v-list>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "AboutUs",
  data: () => ({
    title: 'Sobre Nosotros',
    subtext_t: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore\n' +
        '            magna aliqua. Amet dictum sit amet justo donec enim diam vulputate. Enim sed faucibus turpis in eu mi. Nibh\n' +
        '            cras pulvinar mattis nunc sed blandit libero.',
    icon_check: 'mdi-check-all',
    check1: 'Lorem ipsum dolor sit amet magna aliqua',
    check2: 'Lorem ipsum dolor sit amet magna aliqua',
    check3: 'Lorem ipsum dolor sit amet magna aliqua',
    subtext_b: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et\n' +
        '            dolore magna aliqua. Amet dictum sit amet justo donec enim diam vulputate. Enim sed faucibus turpis in eu\n' +
        '            mi. Nibh cras pulvinar mattis nunc sed blandit libero.'
  }),
}
</script>

<style scoped>

</style>
