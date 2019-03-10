<template>
    <div>

        <ul>
            <li><router-link :to="{name:'logout'}">Salir</router-link></li>
        </ul>
        <h1>Hola Mundo</h1>
        <router-view></router-view>
    </div>
</template>

<script>
    export default {
        name: "Test",
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