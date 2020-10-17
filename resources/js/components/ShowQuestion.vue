<template>
<v-card>
    <v-container fluid>
        <v-card-title>
            <div>
                <div class="headline">{{ data.title }}</div>

                <span class="grey--text">{{ data.user }} said {{ data.created_at }}</span>
            </div>
            <v-spacer></v-spacer>
            <v-btn>{{ data.replies_count }} Replies</v-btn>
        </v-card-title>
        <v-card-text v-html="body"> </v-card-text>
        <v-card-actions v-if="own">
            <v-btn class="ma-2" color="primary" dark @click="editQuestion">
                Edit
                <v-icon dark right> mdi-pencil-circle </v-icon>
            </v-btn>
            <v-btn class="ma-2" color="red" dark @click="deleteQuestion">
                Delete
                <v-icon dark right> mdi-delete-circle </v-icon>
            </v-btn>
        </v-card-actions>
    </v-container>
</v-card>
</template>

<script>
export default {
    name: "ShowQuestion",
    props: ["data"],
    data() {
        return {
            own: User.own(this.data.user_id),
        };
    },
    computed: {
        body() {
            return md.parse(this.data.body);
        },
    },
    methods: {
        deleteQuestion() {
            axios
                .delete(`/api/question/${this.data.slug}`)
                .then((res) => this.$router.push("/forum"))
                .catch((error) => console.log(error.response.data.error));
        },
        editQuestion() {
            EventBus.$emit("startEditing");
        },
    },
};
</script>

<style scoped>
</style>
