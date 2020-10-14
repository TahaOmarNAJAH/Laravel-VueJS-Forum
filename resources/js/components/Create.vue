<template>
  <v-container class="luid fill-height">
    <v-layout class="justify-center">
      <v-card class="elevation-12 mt-8 mb-12">
        <v-form @submit.prevent="create">
          <v-card-title
            class="headline font-weight-regular blue-grey white--text"
            >Ask Question</v-card-title
          >
          <v-card-text>
            <v-row>
              <v-col cols="12">
                <v-text-field
                  v-model="form.title"
                  type="text"
                  label="Title"
                  required
                ></v-text-field>
                <!-- <span class="red--text" v-if="errors.name">{{
                  errors.name[0]
                }}</span> -->
              </v-col>
            </v-row>
            <v-autocomplete 
              :items="categories"
              label="Category"
              v-model="form.category_id"
              item-text="name"
              item-value="id"
            ></v-autocomplete>
            <markdown-editor class="mt-8"
              :options="options"
              v-model="form.body"
            ></markdown-editor>
          </v-card-text>

          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="primary" type="submit">Create</v-btn>
          </v-card-actions>
        </v-form>
      </v-card>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  name: "Create",
  data() {
    return {
      form: {
        title: null,
        category_id: null,
        body: "",
      },
      options: {
        lineNumbers: true,
        styleActiveLine: true,
        styleSelectedText: true,
        lineWrapping: true,
        indentWithTabs: true,
        tabSize: 2,
        indentUnit: 2,
      },
      categories: [],
      errors:{

      }
    };
  },
  created() {
    axios.get("/api/category").then((res) => (this.categories = res.data.data));
  },
  methods: {
    create() {
        axios.post('/api/question',this.form).then(
            (res) => this.$router.push(res.data.path)
        ).catch((error) => (this.errors = error.response.data.error));
    },
  },
};
</script>

<style scoped>
</style>