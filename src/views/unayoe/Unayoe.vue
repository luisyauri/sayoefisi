<template>
    <div class="unayoe">
        <toolbar-unayoe></toolbar-unayoe>
        <v-content>
            <router-view></router-view>
            <v-container grid-list-md>
                <v-layout row wrap>
                    <v-flex>
                        <v-card class="elevation-0 pa-3 mb-3">
                            <div class="justify-end body-1 font-weight-light ">
                                &copy;2018 — Team SAYOE
                            </div>
                        </v-card>
                    </v-flex>
                </v-layout>
            </v-container>

        </v-content>
    </div>
</template>

<script>
    // import jwt_decode from 'jwt-decode';
    import ToolbarUnayoe from '../../components/unayoe/ToolbarUnayoe'

    export default {
        name: "Unayoe",
        components:{
            ToolbarUnayoe
        },
        computed:{
            loggedIn(){
                return this.$store.getters.loggedIn;
            }
        },
        data(){
            return{
                // user: jwt_decode(window.localStorage.access_token),
                // user: JSON.parse(window.localStorage.user),
                // rol: this.user,
            }
        }
    }
</script>

<style scoped>

</style>