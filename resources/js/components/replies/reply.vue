<template>
<div>
    <reply-item v-for="(reply, index) in items" :data="reply" :key="reply.id" :index="index">
        <div v-if="items"></div>
    </reply-item>
</div>
</template>

<script>
import ReplyItem from "./ReplyItem";

export default {
    name: "Reply",
    components: {
        ReplyItem,
    },
    props: ["question"],
    data() {
        return {
            items: this.question.replies,
        };
    },
    created() {
        this.listen();
    },
    methods: {
        listen() {
            EventBus.$on("newReply", (reply) => {
                // console.log(reply);
                this.items.unshift(reply);
            });
            EventBus.$on("deleteReply", (index) => {
                // console.log(reply);
                axios
                    .delete(
                        `/api/question/${this.question.slug}/reply/${this.items[index].id}`
                    )
                    .then((response) => {
                        this.items.splice(index, 1);
                    });
            });
        },
    },
};
</script> 

<style scoped>
</style>
