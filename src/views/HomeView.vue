<template>
  <div>
    Vista Home
    <HeroComponent/>
    <AboutUs/>
    <BuscaTrabajo/>
  </div>
</template>

<script>
import HeroComponent from "@/components/HomeComponents/HeroComponent";
import AboutUs from "@/components/HomeComponents/AboutUs";
import BuscaTrabajo from "@/components/HomeComponents/BuscaTrabajo";
export default {
  name: "HomeView",
  components: {BuscaTrabajo, AboutUs, HeroComponent}
}
</script>

<style scoped>

</style>
