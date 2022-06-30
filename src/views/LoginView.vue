<template>
  <div>
    Vista de Login
    <br>
    <v-btn @click="mostrarProyectos">Mostrar Proyectos</v-btn>
    <div class="row">
      <div
          class="col-4"
          v-for="(data, index) in info"
          :key="index"
      >
        <v-card
            class="mx-auto my-12"
            max-width="374"
        >
          <v-card-title>{{ data.titulo_pry }}</v-card-title>
          <v-card-text>
            <v-row
                align="center"
                class="mx-0"
            >
            </v-row>
            <div class="my-4 text-subtitle-1">
              Descripcion
            </div>
            <div>- {{ data.descripcion_pry }}</div>

            <div class="my-4 text-subtitle-1">
              Requisitos
            </div>
            <div>- {{ data.requisitos_pry }}</div>

            <div class="my-4 text-subtitle-1">
              Pago
            </div>
            <div>${{ data.pago_pry }}</div>

            <div class="my-4 text-subtitle-1">
              Vacantes disponibles
            </div>
            <div>{{ data.vacantes_pry }}</div>

          </v-card-text>
          <v-divider class="mx-4"></v-divider>
          <v-card-actions>
            <v-btn
                color="deep-purple lighten-2"
                text
            >
              Postular
            </v-btn>
          </v-card-actions>
        </v-card>
      </div>
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
