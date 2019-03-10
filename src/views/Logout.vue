<template>
    <div>
    </div>
</template>

<script>
    export default {
        name: "Logout",
        created() {
            this.$store.dispatch('destroyToken');
            // console.log(this.$store.dispatch('destroyUser'))
            this.$router.push({name: 'login'});
            // eslint-disable-next-line
            // .then(response => {
            //     console.log("Hola")
            //     this.$router.push({name: 'login'});
            //  });
        }
    }
</script>

<style scoped>

</style>