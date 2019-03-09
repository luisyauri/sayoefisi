<template>
    <v-container fluid class="login fondoImagen">
        <v-layout row wrap align-center justify-center>
            <v-flex xs12 sm7 md5 lg4>
                <v-card flat>
                    <!--<v-card-title>-->
                        <!--<v-layout row wrap text-xs-center>-->
                            <!--<v-flex xs12>-->
                                <!--<v-img contain="true" src="http://www.urbanui.com/dataviz/template/images/logo.svg" aspect-ratio="5.0"></v-img>-->
                            <!--</v-flex>-->
                            <!--<v-flex xs12>-->
                                <!--<span class="title font-weight-light">INICIAR SESIÓN</span>-->
                            <!--</v-flex>-->
                            <!--<v-flex xs12>-->
                                <!--<span class="subheading font-weight-light">¡Bienvenido! Por favor, ingrese a su cuenta.</span>-->
                            <!--</v-flex>-->
                        <!--</v-layout>-->
                    <!--</v-card-title>-->
                    <v-divider></v-divider>
                    <v-card-text>
                    <v-form @submit.prevent="iniciarSesion">
                        <v-text-field
                                class="body-1 font-weight-light"
                                prepend-icon="fa fa-user-circle"
                                label="Ingrese su correo institucional"
                                type="text"
                                v-model="usuario.correo"
                        ></v-text-field>
                        <v-text-field
                                class="body-1 font-weight-light"
                                prepend-icon="fas fa-key"
                                label="Ingrese su contraseña"
                                type="password"
                                v-model="usuario.contrasenha"
                        ></v-text-field>
                        <v-layout row wrap>
                            <v-flex xs12>
                                <v-btn type="submit" class="font-weight-light" depressed block color="info">Ingresar</v-btn>
                            </v-flex>
                        </v-layout>
                    </v-form>
                    <v-divider class="mt-3"></v-divider>
                </v-card-text>
                    <v-card-actions>
                        <v-dialog v-model=dialog.registro persistent width="400">
                            <v-btn slot="activator" flat class="font-weight-light">Registro</v-btn>
                            <v-card>
                                <v-card-title class="font-weight-light headline primary white--text">
                                    REGISTRO
                                </v-card-title>
                                <v-card-text>
                                    <p class="body-1 font-weight-light">Comuníquese con la Unayoe de la Facultad de Ingeniería de Sistemas e Informática de la Universidad Nacional Mayor de San Marcos.</p>
                                    <v-divider></v-divider>
                                </v-card-text>
                                <v-card-actions>
                                    <v-spacer></v-spacer>
                                    <v-btn class="font-weight-light" flat @click="dialog.registro = false">
                                        Cerrar
                                    </v-btn>
                                </v-card-actions>
                            </v-card>
                        </v-dialog>
                        <v-spacer></v-spacer>
                        <v-dialog v-model=dialog.olvideContraseña persistent width="400">
                            <v-btn slot="activator" flat class="font-weight-light">Olvidé mi contraseña </v-btn>
                            <v-card>
                                <v-card-title class="font-weight-light headline primary white--text">
                                    OLVIDÉ MI CONTRASEÑA
                                </v-card-title>
                                <v-card-text>
                                    <v-container grid-list-md>
                                        <v-layout wrap>
                                            <v-flex xs12>
                                                <p class="body-1 font-weight-light">Ingrese su <span class="font-weight-bold">Correo Institucional</span> y <span class="font-weight-bold">DNI</span> para enviarle una contraseña temporal.</p>
                                            </v-flex>
                                            <v-flex xs12>
                                                <v-form>
                                                    <v-text-field
                                                            class="body-1 font-weight-light"
                                                            prepend-icon="fa fa-user-circle"
                                                            label="Ingrese su Correo Institucional"
                                                            type="text"
                                                            v-model="usuario.correo"
                                                    ></v-text-field>
                                                    <v-text-field
                                                            class="body-1 font-weight-light"
                                                            prepend-icon="fas fa-id-card"
                                                            label="Ingrese su DNI"
                                                            type="number"
                                                            v-model="usuario.dni"
                                                    ></v-text-field>
                                                </v-form>
                                            </v-flex>
                                        </v-layout>
                                    </v-container>
                                    <v-divider></v-divider>
                                </v-card-text>
                                <v-card-actions>
                                    <v-spacer></v-spacer>
                                    <v-btn class="font-weight-light" flat @click="dialog.olvideContraseña = false">
                                        Cerrar
                                    </v-btn>
                                    <v-btn class="font-weight-light" color="success" flat @click="dialog.olvideContraseña = false">
                                        Enviar
                                    </v-btn>
                                </v-card-actions>
                            </v-card>
                        </v-dialog>
                    </v-card-actions>
                </v-card>
            </v-flex>
        </v-layout>
    </v-container>
</template>

<script>
    export default {
        name: "Login",
        data(){
            return{
                usuario:{
                    correo:'sayoe@gmail.com',
                    contrasenha:'12345',
                    dni:'',
                },
                dialog:{
                    registro:false,
                    olvideContraseña:false,
                },
                valor: ''
            }
        },
        methods:{
            iniciarSesion(){
                // if(this.usuario.contraseña=='admin'){
                //     this.$router.push('unayoe');
                // }else{
                //     this.$router.push('estudiante');
                // }
                this.$store.dispatch('retrieveToken',{
                    correo: this.usuario.correo,
                    contrasenha: this.usuario.contrasenha,
                })
                // eslint-disable-next-line
                    .then(response =>{
                        this.$router.push({name:'unayoe'});
                    })
            }
        }
    }
</script>

<style scoped>

    .fondoImagen{
        background: url("https://atmos.atomui.com/light/assets/img/login.svg") no-repeat center;
        background-size: cover;
        min-height: 100vh;
        height: 100%;
        display: flex;
        align-items: stretch;
        justify-content: center;
    }
</style>