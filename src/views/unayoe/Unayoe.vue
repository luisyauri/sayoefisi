<template>
    <div class="unayoe">
        <ul>
            <li><router-link :to="{name:'logout'}">Salir</router-link></li>
        </ul>
        <h1>UNAYOE</h1>
        <h4>User :</h4>
        <h4>Correo :</h4>
        <h4>Token :</h4>

        <router-view></router-view>
    </div>
</template>

<script>
    export default {
        name: "Unayoe",
        computed:{
            loggedIn(){
                return this.$store.getters.loggedIn;
            }
        }
    }
</script>

<style scoped>

</style>