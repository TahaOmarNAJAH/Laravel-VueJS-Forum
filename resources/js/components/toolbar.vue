<template>
  <div>
    <v-toolbar dense>
      <v-toolbar-title>LOGO</v-toolbar-title>

      <v-spacer></v-spacer>

      <v-btn text rounded>FORUM</v-btn>
      <v-btn text rounded>ASK QUESTION </v-btn>
      <v-btn text rounded>CATEGORY</v-btn>
      <router-link to="/login"><v-btn text rounded>LOGIN </v-btn></router-link>
      
    </v-toolbar>
  </div>
</template>

<script>
export default {
  name: "toolbar",
};
</script>

<style scoped>
</style>