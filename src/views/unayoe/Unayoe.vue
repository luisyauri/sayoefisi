<template>
    <div class="unayoe">
        <toolbar-unayoe></toolbar-unayoe>
        <v-content>
            <router-view></router-view>
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