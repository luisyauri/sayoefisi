<template>
    <div class="mi-perfil-unayoe">
        <v-container grid-list-md>
            <v-layout row wrap>
                <v-flex>
                    <v-card class="elevation-0 pa-3 mb-3">
                        <div class="title--text subheading font-weight-bold text-uppercase">
                            <v-icon small class="title--text pa-1">{{BarraTitulo.icono}}</v-icon>
                            {{BarraTitulo.titulo}}
                        </div>
                    </v-card>
                </v-flex>
            </v-layout>
            <v-layout row wrap>
                <v-flex xs12 sm5>
                    <v-card flat >
                        <v-card-text class="text-xs-center">
                            <v-avatar class="my-2" size="150px">
                                <img :src="unayoe.foto" alt="">
                            </v-avatar>

                            <div class="body-2 font-weight-light my-2">{{unayoe.autenticado}}</div>
                            <div class="body-2 font-weight-light my-2">Ultima Sesión : <span class="font-weight-regular">{{unayoe.ultimaSesión}}</span></div>
                            <v-card-actions>
                                <v-spacer></v-spacer>
                                <v-btn @click="abrirFacebook" outline small fab color="#339AF0">
                                    <v-icon>fab fa-facebook-f</v-icon>
                                </v-btn>
                                <v-btn @click="abrirWhatsapp" outline small fab color="#12B886">
                                    <v-icon>fab fa-whatsapp</v-icon>
                                </v-btn>
                                <v-spacer></v-spacer>
                            </v-card-actions>
                        </v-card-text>
                    </v-card>
                </v-flex>
                <v-flex xs12 sm7>
                    <v-card flat="">
                        <v-card-title>
                            <v-icon left>fas fa-vote-yea</v-icon>
                            <span class="subheading font-weight-regular">Datos Generales</span>
                        </v-card-title>
                        <v-divider light></v-divider>
                        <v-card-text class="my-2">
                            <v-layout row wrap>
                                <v-flex xs12 class="font-weight-light">
                                    <span class="font-weight-regular">Nombres y Apellidos : </span> <span>{{unayoe.nombresApellidos}}</span>
                                </v-flex>
                                <v-flex xs12 class="font-weight-light">
                                    <span class="font-weight-regular">Profesión : </span> <span>{{unayoe.profesion}}</span>
                                </v-flex>
                                <v-flex xs12 class="font-weight-light">
                                    <span class="font-weight-regular">Facultad : </span> <span>{{unayoe.facultad}}</span>
                                </v-flex>
                                <v-flex xs12 class="font-weight-light">
                                    <span class="font-weight-regular">Cargo : </span> <span>{{unayoe.cargo}}</span>
                                </v-flex>
                                <v-flex xs12 class="font-weight-light">
                                    <span class="font-weight-regular">Correo : </span> <span>{{unayoe.correo}}</span>
                                </v-flex>
                                <v-flex xs12 class="font-weight-light">
                                    <span class="font-weight-regular">Celular : </span> <span>{{unayoe.celular}}</span>
                                </v-flex>
                            </v-layout>
                            <v-divider light></v-divider>
                            <v-card-actions>
                                <v-spacer></v-spacer>
                                <v-btn depressed class="caption"  color="primary">
                                    <v-icon small dark left>fas fa-edit</v-icon>Editar
                                </v-btn>
                            </v-card-actions>
                        </v-card-text>
                    </v-card>
                </v-flex>
                <v-flex xs12>
                    <v-card flat>
                        <v-card-text>
                            <v-flex xs12 class="font-weight-light">
                                <span class="font-weight-regular">Sobre mí : </span>
                                <div>{{unayoe.autodescripcion}}</div>
                            </v-flex>
                        </v-card-text>
                    </v-card>
                </v-flex>
            </v-layout>
        </v-container>
    </div>
</template>

<script>
    export default {
        name: "MiPerfilUnayoe",
        created(){
          this.$store.dispatch('jsonPerfilUnayoe')
              .then(response =>{
                  var dataMiPerfil = response.data.data[0];
                  this.unayoe.nombresApellidos = dataMiPerfil.nombre + dataMiPerfil.apellido_paterno + dataMiPerfil.apellido_materno;
                  this.unayoe.profesion = dataMiPerfil.profesion;
                  this.unayoe.facultad = dataMiPerfil.facultad;
                  // this.unayoe.cargo = dataMiPerfil.cargo FALTA
                  this.unayoe.correo = dataMiPerfil.usuario.correo;
                  this.unayoe.celular = dataMiPerfil.celular;
                  this.unayoe.autodescripcion = dataMiPerfil.auto_descripcion;
                  this.unayoe.autenticado = dataMiPerfil.usuario.autenticado;
                  this.unayoe.ultimaSesión = dataMiPerfil.usuario.ultima_sesion;
                  this.unayoe.foto = dataMiPerfil.foto;
                  this.unayoe.facebook = dataMiPerfil.facebook;
                  this.unayoe.whatsapp = dataMiPerfil.facebook;
              })
        },
        data(){
            return{
                BarraTitulo:{
                    titulo:'Mi Perfil',
                    icono:'fas fa-user-circle'
                },
                unayoe:{
                    nombresApellidos:'',
                    profesion:'',
                    facultad:"",
                    cargo: 'Jefa',
                    correo: '',
                    celular: '',
                    autodescripcion:'',
                    autenticado:'',
                    ultimaSesión:'',
                    foto:'',
                    facebook:'',
                    whatsapp:'',
                },



            }
        },
        methods:{
            abrirFacebook(){
                window.open(this.unayoe.facebook);
            },
            abrirWhatsapp(){
                window.open(this.unayoe.facebook);
            }
        }
    }
</script>

<style scoped>

</style>