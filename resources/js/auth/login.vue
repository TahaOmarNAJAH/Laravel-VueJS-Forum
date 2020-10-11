<template>
  <v-container class="luid fill-height">
    <v-layout class="justify-center">
      <v-card class="elevation-12 mt-12">
        <v-card-text>
          <v-form @submit.prevent="login">
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
              <v-spacer></v-spacer>
              <v-col class="d-flex" cols="12" sm="3" xsm="12" align-end>
                <v-btn type="submit"> Login </v-btn>
              </v-col>
            </v-row>
          </v-form>
        </v-card-text>
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
  methods:{
      login(){
          User.login(this.form);
      }
  }
};
</script>

<style scoped>
</style>