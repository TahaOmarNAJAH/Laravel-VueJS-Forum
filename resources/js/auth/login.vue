<template>
  <v-container class="luid fill-height">
    <v-layout class="justify-center">
      <v-card class="elevation-12 mt-12">
        <v-form @submit.prevent="login">
          <v-card-text>
            <v-row>
              <v-card-title>Login</v-card-title>
              <v-col cols="12">
                <v-text-field
                  v-model="form.email"
                  type="email"
                  label="E-mail"
                  required
                ></v-text-field>
              </v-col>
              <v-col cols="12">
                <v-text-field
                  v-model="form.password"
                  type="password"
                  label="Password"
                  required
                ></v-text-field>
              </v-col>
              <v-col class="d-flex" cols="12" sm="6" xsm="12"> </v-col>
            </v-row>
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn type="submit" color="primary"> Login </v-btn>
            <router-link to="/signup">
              <v-btn outlined color="indigo" class="ml-2">Sign Up</v-btn>
            </router-link>
          </v-card-actions>
        </v-form>
      </v-card>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  name: "login",
  data() {
    return {
      form: {
        email: null,
        password: null,
      },
    };
  },
  created(){
    if(User.loggedIn()) {
      this.$router.push({name:'forum'});
    }
  },
  methods: {
    login() {
      User.login(this.form);
    },
  },
};
</script>

<style scoped>
</style>
