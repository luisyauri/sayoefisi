<template>
    <v-container fluid class="login fondoImagen">
        <v-layout row wrap align-center justify-center>
            <v-flex xs12 sm7 md5 lg4>
                <v-card flat>
                    <v-card-title>
                        <v-layout row wrap text-xs-center>
                            <v-flex xs12>
                                <span class="title font-weight-light">INICIAR SESIÓN</span>
                            </v-flex>
                            <v-flex xs12>
                                <span class="subheading font-weight-light">¡Bienvenido! Por favor, ingrese a su cuenta.</span>
                            </v-flex>
                        </v-layout>
                    </v-card-title>
                    <v-divider></v-divider>
                    <v-card-text>
                        <v-form >
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
                                    v-model="usuario.contraseña"
                            ></v-text-field>
                            <v-layout row wrap>
                                <v-flex xs12>
                                    <v-btn type="submit" class="font-weight-light" depressed block color="info">Ingresar</v-btn>
                                </v-flex>
                            </v-layout>
                        </v-form>
                        <v-divider class="mt-3"></v-divider>
                    </v-card-text>
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
                    correo:'admin',
                    contraseña:'admin',
                },
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