<template>
<div v-if="question">
    <edit-question v-if="editing" :data="question"></edit-question>
    <div v-else>
        <show-question :data="question"></show-question>
    </div>
    <v-container>
        <reply :question="question"></reply>
        <create-reply v-if="loggedIn" :questionSlug="question.slug"></create-reply>
        <router-link v-else to="/login">Login to reply</router-link>
    </v-container>
</div>
</template>

<script>
import ShowQuestion from "./ShowQuestion";
import EditQuestion from "./EditQuestion";
import Reply from "./replies/reply";
import CreateReply from "./replies/CreateReply"

export default {
    name: "read",
    components: {
        ShowQuestion,
        EditQuestion,
        Reply,
        CreateReply
    },
    data() {
        return {
            question: null,
            editing: false,
        };
    },
    created() {
        this.listen();
        this.getQuestion();
    },
    computed:{
        loggedIn(){
            return User.loggedIn();
        }
    },
    methods: {
        getQuestion() {
            axios
                .get(`/api/question/${this.$route.params.slug}`)
                .then((res) => (this.question = res.data.data));
        },
        listen() {
            EventBus.$on("startEditing", () => {
                this.editing = true;
            });
            EventBus.$on("cancelEditing", () => {
                this.editing = false;
            });
        },
    },
};
</script>

<style scoped>
</style>
