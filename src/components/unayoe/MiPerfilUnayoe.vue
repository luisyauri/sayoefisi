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
        </v-container>
    </div>
</template>

<script>
    export default {
        name: "MiPerfilUnayoe",
        data(){
            return{
                BarraTitulo:{
                    titulo:'Mi Perfil',
                    icono:'fas fa-user-circle'
                }
            }
        }
    }
</script>

<style scoped>

</style>