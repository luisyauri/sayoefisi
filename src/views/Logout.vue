<template>
    <div>

    </div>
</template>

<script>
    export default {
        name: "Logout",
        created() {
            this.$store.dispatch('destroyToken')
            // eslint-disable-next-line
            .then(response => {
                this.$router.push({name: 'login'});
             });
        }
    }
</script>

<style scoped>

</style>