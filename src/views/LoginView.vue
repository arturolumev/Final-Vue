<template>
  <div>
    Vista de Login
    <br>
    <v-btn @click="mostrarProyectos">Mostrar Proyectos</v-btn>
    <p>{{ info }}</p>
    <div
        v-for="data in info"
        class="data"
        :key="data"
    >
      {{data.titulo_pry}}
      <span class="lighten">
        <span v-html="data.descripcion_pry"></span> {{ data.requisitos_pry }} {{ data.pago_pry }} {{ data.vacantes_pry }}
    </span>
    </div>

  </div>
</template>

<script>

import axios from "axios";

export default {
  name: "LoginView",
  data () {
    return {
      info: null,
    }
  },
  methods: {
    async mostrarProyectos () {
      const envio = await axios.get('http://localhost:8000/proyectos').then(response => (this.info = response.data.proyectosArray))
      console.log(envio)
    }
  }
}
</script>

<style scoped>

</style>
