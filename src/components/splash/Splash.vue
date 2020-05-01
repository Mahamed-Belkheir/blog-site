<template>
  <v-content>
    <v-container fluid>
          <v-row>
              <v-col align="center">
                    <h1> Welcome to the Blog Site</h1>
                    <p> This a simple blog developed in Vue.JS </p>
              </v-col>
          </v-row>
    </v-container>

    <router-view></router-view>

  </v-content>
</template>


<script>
export default {
    name: 'Splash'
};
</script>


<style scoped>
</style>