<template>
  <v-row justify="center">
    <v-dialog
        v-model="dialog"
        persistent
        max-width="100%"
    >
      <template v-slot:activator="{ on, attrs }">
        <v-btn
            color= "purple darken-4"
            dark
            v-bind="attrs"
            v-on="on"
            rounded
        >
          Cuenta para Empresas
        </v-btn>
      </template>

      <v-row align="center" justify="center">
        <v-col cols="12" sm="8" md="8">
          <v-card class="elevation-12">
            <v-window v-model="step">
              <v-window-item :value="1">
                <v-row>
                  <v-col cols="12" md="8">
                    <v-card-text class="mt-12">
                      <h1 class="text-center display-2 indigo--text text--darken-4">
                        Iniciar sesión en {{ tituloPagina }}
                      </h1>
                      <div class="text-center mt-4">
                        <v-btn class="mx-2" fab color="black" outlined>
                          <v-icon>{{ iconFacebook }}</v-icon>
                        </v-btn>

                        <v-btn class="mx-2" fab color="black" outlined>
                          <v-icon>{{ iconGoogle }}</v-icon>
                        </v-btn>
                        <v-btn class="mx-2" fab color="black" outlined>
                          <v-icon>{{ iconLinkedIn }}</v-icon>
                        </v-btn>
                      </div>
                      <h4 class="text-center mt-4">Verifique su correo para poder iniciar sesión</h4>
                      <v-form>
                        <v-text-field
                            label="RUC"
                            name="ruc"
                            prepend-icon="mdi-email"
                            type="number"
                            color="purple darken-4"
                            v-model="form.ruc"
                        />

                        <v-text-field
                            label="Email"
                            name="email"
                            prepend-icon="mdi-email"
                            type="text"
                            color="purple darken-4"
                            v-model="form.email"
                        />

                        <v-text-field
                            id="password"
                            label="Contraseña"
                            name="password"
                            prepend-icon="mdi-lock"
                            type="password"
                            color="purple darken-4"
                            v-model="form.password"
                        />
                      </v-form>
                      <h3 class="text-center mt-4">¿Olvidaste tu contraseña?</h3>
                    </v-card-text>
                    <div class="text-center mt-3">
                      <!-- BOTON INICIAR SESION -->
                      <v-btn rounded color="purple darken-4" dark @click="ingresar()">Iniciar Sesión</v-btn>
                      <v-btn class="ml-5" rounded color="purple darken-4" dark @click="dialog = false">Cerrar</v-btn>
                    </div>
                  </v-col>
                  <v-col cols="12" md="4" class="purple darken-4">
                    <v-card-text class="white--text mt-12">
                      <h1 class="text-center display-1">{{ registerAdTitle }}</h1>
                      <h5
                          class="text-center"
                      >{{ registerAdInfo }}</h5>
                    </v-card-text>
                    <div class="text-center">
                      <v-btn rounded outlined dark @click="step++">Registrarse</v-btn>
                    </div>
                  </v-col>
                </v-row>
              </v-window-item>
              <v-window-item :value="2">
                <v-row class="fill-height">
                  <v-col cols="12" md="4" class="purple darken-4">
                    <v-card-text class="white--text mt-12">
                      <h1 class="text-center display-1">{{ loginAdTitle }}</h1>
                      <h5
                          class="text-center"
                      >{{ loginAdInfo }}</h5>
                    </v-card-text>
                    <div class="text-center">
                      <v-btn rounded outlined dark @click="step--">Iniciar sesión</v-btn>
                    </div>
                  </v-col>

                  <v-col cols="12" md="8">
                    <v-card-text class="mt-12">
                      <h1 class="text-center display-2 indigo--text text--darken-4">Registrarse</h1>
                      <div class="text-center mt-4">
                        <v-btn class="mx-2" fab color="black" outlined>
                          <v-icon>{{ iconFacebook }}</v-icon>
                        </v-btn>

                        <v-btn class="mx-2" fab color="black" outlined>
                          <v-icon>{{ iconGoogle }}</v-icon>
                        </v-btn>
                        <v-btn class="mx-2" fab color="black" outlined>
                          <v-icon>{{ iconLinkedIn }}</v-icon>
                        </v-btn>
                      </div>
                      <h4 class="text-center mt-4">Verifique sus datos para poder registrarse</h4>
                      <v-form>
                        <v-text-field
                            label="Nombre de la Empresa"
                            name="name"
                            prepend-icon="mdi-account"
                            type="text"
                            color="purple darken-4"
                            v-model="form.nombreEmpresa"
                        />

                        <v-text-field
                            label="RUC de la Empresa"
                            name="ruc"
                            prepend-icon="mdi-account"
                            type="number"
                            color="purple darken-4"
                            v-model="form.ruc"
                        />

                        <v-text-field
                            label="Nombre del Encargado"
                            name="encargado"
                            prepend-icon="mdi-email"
                            type="text"
                            color="purple darken-4"
                            v-model="form.nombreEncargado"
                        />

                        <v-text-field
                            label="apellidoEncargado"
                            name="apellido"
                            prepend-icon="mdi-lock"
                            type="text"
                            color="purple darken-4"
                            v-model="form.apellidoEncargado"
                        />

                        <v-text-field
                            label="Email"
                            name="email"
                            prepend-icon="mdi-account"
                            type="text"
                            color="purple darken-4"
                            v-model="form.email"
                        />

                        <v-text-field
                            id="password"
                            label="Password"
                            name="password"
                            prepend-icon="mdi-account"
                            type="password"
                            color="purple darken-4"
                            v-model="form.password"
                        />

                      </v-form>
                    </v-card-text>
                    <div class="text-center mt-n5">
                      <!-- BOTON REGISTRARSE -->
                      <v-btn rounded color="purple darken-4" dark @click="registrarse()">Registrarse</v-btn>
                      <v-btn class="ml-5" rounded color="purple darken-4" dark @click="dialog = false">Cerrar</v-btn>
                    </div>
                  </v-col>
                </v-row>
              </v-window-item>
            </v-window>
          </v-card>
        </v-col>
      </v-row>
    </v-dialog>
  </v-row>
</template>

<script>
import axios from "axios";
import router from "@/router";

export default {
  name: "EmpresaLoginComponent",
  data () {
    return {
      form: {
        nombreEmpresa: null,
        ruc: null,
        nombreEncargado: null,
        apellidoEncargado: null,
        email: null,
        tipo: 'Empresa',
        password: null
      },
      dialog: false,
      step: 1,
      tituloPagina: 'COD|NG',
      iconFacebook: 'mdi-facebook',
      iconGoogle: 'mdi-google',
      iconLinkedIn: 'mdi-linkedin',
      registerAdTitle: '¿No tienes cuenta?',
      registerAdInfo: 'Registrate de manera gratuita y publica tus ofertas, miles de desarrolladores te esperan.',
      loginAdTitle: '¿Ya tienes cuenta?',
      loginAdInfo: 'Inicia sesión y cuelga tus proyectos rapidamente.'
    }
  },
  props: {
    source: String
  },
  methods: {
    async ingresar () {
      alert('presiono iniciar sesion')
      const envio = await axios.post('http://localhost:8000/LoginVueEmpresa', this.form)
      console.log(envio)
      if (envio.data.email) {
        this.dialog = false;
        //router.push('/user').catch(() => {});
        window.localStorage.setItem('usuario-logeado', JSON.stringify(envio.data.email))
        router.push('/empresa').catch(() => {});
      }
    },
    async registrarse () {
      alert('presiono registrarse')
      const envio = await axios.post('http://localhost:8000/RegisterVueEmpresa', this.form)
      console.log(envio)
      if (envio.data.email) {
        this.dialog = false
      }
    }
  }
}
</script>

<style scoped>

</style>
