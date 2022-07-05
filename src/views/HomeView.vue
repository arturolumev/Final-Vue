<template>
  <div>
    Vista Home
    <HeroComponent/>
    <AboutUs/>
    <BuscaTrabajo/>
    <EmpresaComponent/>
  </div>
</template>

<script>
import HeroComponent from "@/components/HomeComponents/HeroComponent";
import AboutUs from "@/components/HomeComponents/AboutUs";
import BuscaTrabajo from "@/components/HomeComponents/BuscaTrabajo";
import EmpresaComponent from "@/components/HomeComponents/EmpresaComponent";
export default {
  name: "HomeView",
  components: {EmpresaComponent, BuscaTrabajo, AboutUs, HeroComponent}
}
</script>

<style scoped>

</style>
