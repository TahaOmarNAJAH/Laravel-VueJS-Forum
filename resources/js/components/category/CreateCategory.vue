<template>
<v-container class="luid fill-height">
    <v-layout row wrap>
        <v-flex xs12 md8>
            <v-card class="elevation-12 mr-4">
                <v-toolbar color="cyan" dark dense class="mt-4">
                    <v-toolbar-title>All Categories</v-toolbar-title>
                </v-toolbar>
                <v-list>
                    <div v-for="(category, index) in categories" :key="category.id">
                        <v-list-item>
                            <v-list-item-content>
                                {{ category.name }}
                            </v-list-item-content>
                            <v-list-item-icon>
                                <v-btn icon small @click="editCategory(index)">
                                    <v-icon color="primary">mdi-pencil</v-icon>
                                </v-btn>
                                <v-btn icon small @click="deleteCategory(category.slug, index)">
                                    <v-icon color="error">mdi-delete</v-icon>
                                </v-btn>
                            </v-list-item-icon>
                        </v-list-item>
                        <v-divider></v-divider>
                    </div>
                </v-list>
            </v-card>
        </v-flex>

        <v-flex xs12 md4>
            <v-card class="elevation-12 mt-4">
                <v-form @submit.prevent="SubmitCategory">
                    <v-card-title class="headline font-weight-regular blue-grey white--text">Add Category</v-card-title>
                    <v-card-text>
                        <v-text-field v-model="form.name" type="text" label="Category Name" required></v-text-field>
                    </v-card-text>

                    <v-card-actions>
                        <v-spacer></v-spacer>
                        <v-btn color="primary" type="submit" v-if="editSlug">Update</v-btn>
                        <v-btn color="cyan" dark type="submit" v-else>Create</v-btn>
                    </v-card-actions>
                </v-form>
            </v-card>
        </v-flex>
    </v-layout>
</v-container>
</template>

<script>
export default {
    name: "CreateCategory",
    data() {
        return {
            form: {
                name: null,
            },
            categories: [],
            editSlug: null,
        };
    },
    created() {
        this.getCategories();
    },
    methods: {
        SubmitCategory() {
            this.editSlug ? this.update() : this.create();
        },
        update() {
            console.log("updating");
            axios.put(`/api/category/${this.editSlug}`, this.form).then((res) => {
                this.categories.unshift(res.data);
                this.form.name = null;
            });
        },
        create() {
            axios
                .post("/api/category", this.form)
                .then((res) => {
                    this.categories.unshift(res.data);
                    this.form.name = null;
                })
                .catch((error) => (this.errors = error.response.data.errors));
        },
        getCategories() {
            axios
                .get("/api/category")
                .then((res) => (this.categories = res.data.data));
        },
        deleteCategory(slug, index) {
            axios.delete(`/api/category/${slug}`).then((res) => {
                //let index = this.categories.indexOf(slug);
                this.categories.splice(index, 1);
            });
        },
        editCategory(index) {
            this.form.name = this.categories[index].name;
            this.editSlug = this.categories[index].slug;
            this.categories.splice(index, 1);
        },
    },
};
</script>

<style scoped>
</style>
