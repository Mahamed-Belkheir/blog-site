<template>
    <v-content>
        <v-form>
            <v-container>
                <v-col align="center">
                    <h1>Register</h1>
                    <v-text-field label="username"></v-text-field>
                    <v-text-field label="email"></v-text-field>
                    <v-text-field label="password"></v-text-field>
                    <v-btn>Register</v-btn><br>
                    <router-link to="/login"> Login </router-link>

                </v-col>
            </v-container>
        </v-form>
    </v-content>
</template>



<script>
export default {
    name: 'Register'
}
</script>



<style scoped>

</style>