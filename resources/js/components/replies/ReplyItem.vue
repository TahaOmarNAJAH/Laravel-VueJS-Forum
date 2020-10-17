<template>
<div class="mt-4">
    <v-card>
        <v-card-title>
            <div>
                <div class="headline">
                    {{ data.user }}
                    <div v-if="own && !editing">
                        <v-btn icon small @click="editReply">
                            <v-icon color="primary">mdi-pencil</v-icon>
                        </v-btn>
                        <v-btn icon small @click="deleteReply">
                            <v-icon color="error">mdi-delete</v-icon>
                        </v-btn>
                    </div>
                </div>
                <span class="grey--text subtitle-2">{{ data.created_at }}</span>
            </div>
        </v-card-title>
        <edit-reply v-if="editing" :edited="data"></edit-reply>
        <!-- <v-divider class="mt-1"></v-divider> -->
        <v-card-text v-else v-html="reply"></v-card-text>
    </v-card>
</div>
</template>

<script>
import EditReply from "./EditReply";

export default {
    name: "ReplyItem",
    props: ["data", "index"],
    components: {
        EditReply,
    },
    data() {
        return {
            editing: false,
            beforeEditReplyBody: "",
        };
    },
    created() {
        this.listen();
    },
    computed: {
        own() {
            return User.own(this.data.user_id);
        },
        reply() {
            return md.parse(this.data.reply);
        },
    },
    methods: {
        deleteReply() {
            EventBus.$emit("deleteReply", this.index);
        },
        editReply() {
            this.editing = true;
            beforeEditReplyBody: this.data.reply
        },
        listen() {
            EventBus.$on("cancelEditing", (reply) => {
                this.editing = false;
                if (reply !== this.data.reply) {
                    this.data.reply = this.beforeEditReplyBody;
                    this.beforeEditReplyBody = "";
                }

            });
        },
    },
};
</script>

<style  scoped>
</style>
