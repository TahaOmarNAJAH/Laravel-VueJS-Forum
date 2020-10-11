<template>
  <v-container class="luid fill-height">
    <v-layout class="justify-center">
      <v-card class="elevation-12 mt-12">
        <v-form @submit.prevent="signup">
          <v-card-text>
            <v-row>
              <v-card-title>Sign Up</v-card-title>

              <v-col cols="12">
                <v-text-field
                  v-model="form.name"
                  type="text"
                  label="Name"
                  required
                ></v-text-field>
                <span class="red--text" v-if="errors.name">{{
                  errors.name[0]
                }}</span>
              </v-col>

              <v-col cols="12">
                <v-text-field
                  v-model="form.email"
                  type="email"
                  label="E-mail"
                  required
                ></v-text-field>
                <span class="red--text" v-if="errors.email">{{
                  errors.email[0]
                }}</span>
              </v-col>

              <v-col cols="12">
                <v-text-field
                  v-model="form.password"
                  type="password"
                  label="Password"
                  required
                ></v-text-field>
                <span class="red--text" v-if="errors.password">{{
                  errors.password[0]
                }}</span>
              </v-col>

              <v-col cols="12">
                <v-text-field
                  v-model="form.password_confirmation"
                  type="password"
                  label="Confirm Password"
                  required
                ></v-text-field>
                <span class="red--text" v-if="errors.password">{{
                  errors.password[0]
                }}</span>
              </v-col>
              <v-col class="d-flex" cols="12" sm="6" xsm="12"> </v-col>
            </v-row>
          </v-card-text>

          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn type="submit" color="primary">Sign up </v-btn>
            <router-link to="/login">
              <v-btn outlined color="indigo" class="ml-2">Login</v-btn>
            </router-link>
          </v-card-actions>
        </v-form>
      </v-card>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  name: "signup",
  data() {
    return {
      form: {
        name: null,
        email: null,
        password: null,
        password_confirmation: null,
      },
      errors: {},
    };
  },
  created(){
    if(User.loggedIn()) {
      this.$router.push({name:'forum'});
    }
  },
  methods: {
    signup() {
      axios
        .post("/api/auth/signup", this.form)
        .then((res) => {
          User.responseAfterLogin(res);
          this.$router.push({name:'forum'});
        })
        .catch((error) => (this.errors = error.response.data.errors));
    },
  },
};
</script>

<style scoped>
</style>
