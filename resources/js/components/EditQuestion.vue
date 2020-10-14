<template>
  <v-container class="luid fill-height">
    <v-layout class="justify-center">
      <v-card class="elevation-12 mt-8 mb-12">
        <v-form @submit.prevent="update">
          <v-card-title
            class="headline font-weight-regular blue-grey white--text"
            >Edit Question
          </v-card-title>
          <v-card-text>
            <v-row>
              <v-col cols="12">
                <v-text-field
                  v-model="form.title"
                  type="text"
                  label="Title"
                  required
                >
                </v-text-field>
              </v-col>
            </v-row>
            <markdown-editor
              class="mt-8"
              :options="options"
              v-model="form.body"
            ></markdown-editor>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn type="submit" class="ma-2" color="primary" dark>
                Edit
                <v-icon dark right> mdi-pencil-circle </v-icon>
              </v-btn>
              <v-btn type="submit" class="ma-2"  dark @click="cancel">
                Cancel
                <v-icon dark left> mdi-minus-circle </v-icon>
              </v-btn>
            </v-card-actions>
          </v-card-text>
        </v-form>
      </v-card>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  name: "EditQuestion",
  props:['data'],
  data() {
    return {
      form: {
        title: null,
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
    };
  },
  methods: {
    update() {
        axios.put(`/api/question/${this.data.slug}`,this.form)
        .then((res)=> this.cancel() )
    },
    cancel(){
        EventBus.$emit('cancelEditing');
    }
  },
  created(){
      this.form=this.data;
  }
};
</script>

<style scoped>
</style>