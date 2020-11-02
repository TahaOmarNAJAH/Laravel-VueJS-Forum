<template>
  <div>
    <v-toolbar dense>
      <v-toolbar-title>LOGO</v-toolbar-title>

      <v-spacer></v-spacer>
      <app-notification v-if="loggedIn  "></app-notification>
      <router-link v-for="item in items" :key="item.title" :to="item.to">
        <v-btn text rounded v-if="item.show">{{ item.title }} </v-btn>
      </router-link>
    </v-toolbar>
  </div>
</template>

<script>
import AppNotification from './AppNotification'
export default {
  name: "toolbar",
  components:{
    AppNotification,
  },
  data() {
    return {
      loggedIn: User.loggedIn(),
      items: [
        { title: "Forum", to: "/forum", show: true },
        { title: "Login", to: "/login", show: !User.loggedIn() },
        { title: "Ask Question", to: "/ask", show: User.loggedIn() },
        { title: "Category", to: "/category", show: User.loggedIn() },
        { title: "Logout", to: "/logout", show: User.loggedIn() },
      ],
    };
  },
  created(){
    EventBus.$on('logout', () =>{
      User.logOut();
    }); 
  },
};
</script>

<style scoped>
</style>
