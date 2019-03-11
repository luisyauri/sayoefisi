<template>
    <nav>
        <v-toolbar class="elevation-1" color="white" app fixed>
            <v-toolbar-title style="width: 300px" class="m1-0 pl-3">
                <v-toolbar-side-icon class="" @click="drawer=!drawer"></v-toolbar-side-icon>
            </v-toolbar-title>
            <v-spacer></v-spacer>
            <v-btn icon>
                <v-icon small>fas fa-bell</v-icon>
            </v-btn>
            <v-btn icon >
                <v-avatar size="32px">
                    <img src="https://scontent.flim10-1.fna.fbcdn.net/v/t1.0-1/p160x160/27332182_1881661202164725_1651838000350423678_n.jpg?_nc_cat=107&_nc_eui2=AeGiAvIho3d2THLFeXdLo2jP2FMPZqqkxqizSfYmfYi8avcFSGamHK3btOZnTA4-YEtMztystrPcpdsZ83rjAtfVWO9CHk7zS-OK2PT7cHvjvA&_nc_ht=scontent.flim10-1.fna&oh=8dc1b23e049011f3b5698646f98b55f7&oe=5CDA9349" alt="">
                </v-avatar>
            </v-btn>
            <!--<v-menu offset-y>-->
                <!--<template v-slot:activator="{ on }">-->
                    <!--<v-btn icon v-on="on">-->
                        <!--<v-avatar size="32px">-->
                            <!--<img src="https://cdn.vuetifyjs.com/images/john.jpg" alt="">-->
                        <!--</v-avatar>-->
                    <!--</v-btn>-->
                <!--</template>-->
                <!--<v-list>-->
                    <!--<v-list-tile-->
                            <!--v-for="(dropDown, index) in dropDowns"-->
                            <!--:key="index"-->
                            <!--@click="dropDown.route"-->
                    <!--&gt;-->
                        <!--<v-list-tile-title>{{ dropDown.title }}</v-list-tile-title>-->
                    <!--</v-list-tile>-->
                <!--</v-list>-->
            <!--</v-menu>-->
        </v-toolbar>
        <v-navigation-drawer v-model="drawer" app class="naviDrawerColor">
            <v-toolbar flat dark class="naviDrawerLogo">
                <v-img max-width="200px"  src="http://i65.tinypic.com/xfxkjc.png" ></v-img>
            </v-toolbar>
            <v-list dark dense>
                <v-list-tile v-for="link in links" :key="link.text" router :to="link.route">
                    <v-list-tile-action class="menosEspacio">
                        <v-icon small>{{link.icon}}</v-icon>
                    </v-list-tile-action>
                    <v-list-tile-content>
                        <v-list-tile-title>
                            {{link.text}}
                        </v-list-tile-title>
                    </v-list-tile-content>
                </v-list-tile>
            </v-list>
        </v-navigation-drawer>
    </nav>
</template>

<script>
    export default {
        name: "ToolbarUnayoe",
        data(){
            return{
                drawer:false,
                links:[
                    {icon:'fas fa-home',text:'Dashboard',route:'/unayoe/'},
                    {icon:'fas fa-user-circle',text:'Mi Perfil',route:'/unayoe/mi-perfil'},
                    {icon:'fas fa-window-restore',text:'Evaluaciones Psicológicas',route:'/unayoe/evaluaciones-psicologicas'},
                    {icon:'fas fa-user-graduate',text:'Estudiantes',route:'/unayoe/estudiantes'},
                    {icon:'fas fa-calendar-check',text:'Citas',route:'/'},
                    {icon:'fas fa-chart-bar',text:'Estadísticas',route:'/'},
                    {icon:'fas fa-sign-out-alt',text:'Cerrar Sesión',route:'/logout'},
                ],
                // dropDowns:[
                //     {title:'Mi Perfil',route:'irPerfil'},
                //     {title:'Cerrar Sesión',route:'cerrarSesión'},
                // ]
            }
        },
        methods:{
            // irPerfil(){
            //
            // },
            // cerrarSesión(){
            //     this.$router.push({name:'logout'});
            // }
        }
    }
</script>

<style scoped>
    .naviDrawerColor{
        background-color: #222034 !important;
        border-color: #222034 !important;
    }
    .naviDrawerLogo{
        background-color: #0E0B20 !important;
        border-color: #0E0B20 !important;
    }
    .menosEspacio{
        min-width: 46px !important;
    }
</style>