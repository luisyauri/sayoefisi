<template>
    <div class="unayoe">
        <ul>
            <li><router-link :to="{name:'logout'}">Salir</router-link></li>
        </ul>
        <h1>UNAYOE</h1>
        <li v-for="(v, k) in user" :key="k">
            <b class="key">{{ k }}</b>: <span>{{ v }}</span>
        </li>

        <router-view></router-view>
    </div>
</template>

<script>
    import jwt_decode from 'jwt-decode';

    export default {
        name: "Unayoe",
        computed:{
            loggedIn(){
                return this.$store.getters.loggedIn;
            }
        },
        data(){
            return{
                user: jwt_decode(window.localStorage.access_token),
                // user: JSON.parse(window.localStorage.user),
                // rol: this.user,
            }
        }
    }
</script>

<style scoped>

</style>