<template>
    <v-content>
        <v-form>
            <v-container>
                <v-col align="center">
                    <h1>Login</h1>
                    <v-text-field label="email"></v-text-field>
                    <v-text-field label="password"></v-text-field>
                    <v-btn>Login</v-btn> <br>
                    <router-link to="/register">Register an account</router-link>
                </v-col>
            </v-container>
        </v-form>
    </v-content>
</template>



<script>
export default {
    name: 'Login'
}
</script>



<style scoped>

</style>