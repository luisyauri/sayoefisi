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
                <v-flex xs12 sm4>
                    <v-card flat >
                        <v-card-text class="text-xs-center">
                            <v-alert class="mb-3" :value="true" type="success">
                                {{mensajeMes}}
                            </v-alert>
                            <v-divider class="my-2" light></v-divider>
                            <v-avatar class="my-2" size="150px">
                                <img src="http://react-material.fusetheme.com/assets/images/avatars/Velazquez.jpg" alt="">
                            </v-avatar>
                            <div class="subheading font-weight-regular my-2">{{unayoe.nombresApellidos}}</div>
                            <div class="body-2 font-weight-light my-2">{{unayoe.estado}}</div>
                            <div class="body-2 font-weight-light my-2"><span class="font-weight-regular">{{unayoe.ultimaSesión}}</span> Ultima Sesión</div>
                            <v-card-actions>
                                <v-btn flat class="body-2" color="blue">Facebook</v-btn>
                                <v-spacer></v-spacer>
                                <v-btn flat class="body-2" color="red">Gmail</v-btn>
                            </v-card-actions>
                        </v-card-text>
                    </v-card>
                </v-flex>
                <v-flex xs12 sm8>
                    <v-card flat="">
                        <v-card-title>
                            <v-icon left>fas fa-vote-yea</v-icon>
                            <span class="subheading font-weight-light">Datos Generales</span>
                        </v-card-title>
                        <v-divider light></v-divider>
                        <v-card-text class="my-2">
                            <v-layout row wrap >
                                <v-flex xs12 sm6>
                                    <v-text-field
                                            class="body-2 font-weight-light"
                                            v-model="unayoe.nombresApellidos"
                                            label="Nombres y Apellidos"
                                            disabled
                                    ></v-text-field>
                                </v-flex>
                                <v-flex xs12 sm6>
                                    <v-text-field
                                            class="body-2 font-weight-light"
                                            v-model="unayoe.profesion"
                                            label="Profesión"
                                            disabled
                                    ></v-text-field>
                                </v-flex>
                            </v-layout>
                            <v-layout row wrap>
                                <v-flex xs12 sm6>
                                    <v-text-field
                                            class="body-2 font-weight-light"
                                            v-model="unayoe.facultad"
                                            label="Facultad"
                                            disabled
                                    ></v-text-field>
                                </v-flex>
                                <v-flex xs12 sm6>
                                    <v-text-field
                                            class="body-2 font-weight-light"
                                            v-model="unayoe.cargo"
                                            label="Cargo"
                                            disabled
                                    ></v-text-field>
                                </v-flex>
                            </v-layout>
                            <v-layout row wrap>
                                <v-flex xs12 sm6>
                                    <v-text-field
                                            class="body-2 font-weight-light"
                                            v-model="unayoe.correo"
                                            label="Correo"
                                            disabled
                                    ></v-text-field>
                                </v-flex>
                                <v-flex xs12 sm6>
                                    <v-text-field
                                            class="body-2 font-weight-light"
                                            v-model="unayoe.celular"
                                            label="Celular"
                                            disabled
                                    ></v-text-field>
                                </v-flex>
                            </v-layout>
                            <v-layout row wrap>
                                <v-flex xs12 >
                                    <v-textarea
                                            auto-grow
                                            class="body-2 font-weight-light"
                                            label="Sobre mí"
                                            v-model="unayoe.autodescripcion"
                                            hint="Se recomienda no más de 200 caracteres."
                                            disabled
                                    >
                                    </v-textarea>
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
                  this.unayoe.profesion = response.data.profesion;
              })
        },
        data(){
            return{
                BarraTitulo:{
                    titulo:'Mi Perfil',
                    icono:'fas fa-user-circle'
                },
                mensajeMes: 'Tu trabajo va a llenar gran parte de tu vida, la única manera de estar realmente satisfecho es hacer lo que creas es un gran trabajo y la única manera de hacerlo es amar lo que haces.',
                unayoe:{
                    nombresApellidos:'Luis David Yauri Martinez',
                    profesion:"",
                    facultad:"Ingeniería de Sistemas e Informática",
                    cargo: "Jefe Unayoe",
                    correo: "luis@gmail.com",
                    celular: "(+51) 999-999-999",
                    autodescripcion:'The Woodman set to work at once, and so sharp was his axe that the tree was soon chopped nearly through.The Woodman set to work at once, and so sharp was his axe that the tree was soon chopped nearly through.The Woodman set to work at once, and so sharp was his axe that the tree was soon chopped nearly through.',
                    estado:'• En Línea',
                    ultimaSesión:'14:15:10',
                    foto:''
                },



            }
        }
    }
</script>

<style scoped>

</style>