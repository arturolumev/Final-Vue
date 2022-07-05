<template>
  <div>
    Vista de Usuario
    <br>
    <v-btn @click="logOut" v-if="mostrarBtn1">Cerrar Sesion</v-btn>
    <v-btn @click="inicio" v-if="bienvenido">Bienvenido</v-btn>
    <v-row v-if="mostrar">
      <v-col lg="6">
        <h2 class="intro-text">Bienvenido, {{ user }}</h2>
        <p>{{ subtext }}</p>
      </v-col>
      <v-col lg="6">
        <img width="80%" src="../assets/website-img.jpg" alt="Imagen de vista Login">
      </v-col>
    </v-row>

    <div>
      <v-btn @click="mostrarProyectos" v-if="mostrarBtn1">Mostrar Proyectos</v-btn>

    </div>
    <div class="row" v-if="mostrarProyecto">
      <div
          class="col-4"
          v-for="(data, index) in info"
          :key="index"
      >
        <v-form>
        <v-card
            class="mx-auto my-12"
            max-width="374"
        >
          <template slot="progress">
            <v-progress-linear
                color="deep-purple"
                height="10"
                indeterminate
            ></v-progress-linear>
          </template>

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
                @click="postular(data)"
            >
              Postular
            </v-btn>
          </v-card-actions>
        </v-card>
        </v-form>
      </div>
    </div>
    <div>
      <v-btn @click="ocultarProyectos" v-if="mostrarBtn2">
        Ocultar
      </v-btn>

    </div>

  </div>

</template>

<script>

import axios from "axios";
import router from "@/router";

export default {
  name: "LoginView",
  data () {

    return {
      form: {
        titulo_pry: null,
        descripcion_pry: null,
        nombre: null,
        email: null
      },
      info: null,
      mostrar: false,
      mostrarProyecto: false,
      mostrarBtn1: false,
      mostrarBtn2: false,
      bienvenido: true,
      user: null,
      subtext: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore\n' +
          '          magna aliqua. Amet dictum sit amet justo donec enim diam vulputate. Enim sed faucibus turpis in eu mi. Nibh\n' +
          '          cras pulvinar mattis nunc sed blandit libero. Cras tincidunt lobortis feugiat vivamus at augue eget arcu.',
      titulo: null,
      dialog: false,
    }
  },
  methods: {
    inicio(){
      const user = JSON.parse(window.localStorage.getItem('usuario-logeado'))
      console.log(typeof user, user)
      this.user = user.nombre
      this.mostrar=true
      this.mostrarProyecto=true
      this.mostrarBtn1=true
      this.bienvenido=false
    },
    async mostrarProyectos () {
      const envio = await axios.get('http://localhost:8000/proyectos').then(response => (this.info = response.data.proyectosArray))
      console.log(envio)
      this.mostrar=true
      this.mostrarProyecto=true
      this.mostrarBtn2=true
    },
    ocultarProyectos(){
      this.mostrarBtn2=false
      this.mostrarProyecto=false
    },
    async postular(data) {
      alert('presiono postular')
      const user = JSON.parse(window.localStorage.getItem('usuario-logeado'))
      this.form.titulo_pry = data.titulo_pry
      this.form.descripcion_pry = data.descripcion_pry
      this.form.nombre = user.nombre
      this.form.email = user.email
      const envio = await axios.post('http://localhost:8000/PostularVue', this.form)
      console.log(envio)
      //console.log(envio.data.postulacion)
      if (envio.data.postulacion) {
        alert("Postulacion exitosa")

      }
    },
    async logOut() {
      window.localStorage.removeItem('usuario-logeado')
      alert("Cerro Sesion")
      router.push('/home')
    }
  }
}
</script>

<style scoped>

</style>
