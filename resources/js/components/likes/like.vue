<template>
<div>
    <v-btn icon @click="likeIt">
        <v-icon :color="color">mdi-heart</v-icon>
    </v-btn>{{ count }}
</div>
</template>

<script>
export default {
    name: "Like",
    props: ["content"],
    data() {
        return {
            liked: this.content.liked,
            count: this.content.like_count
        }
    },
    computed: {
        color() {
            return this.liked ? 'error' : 'red lighten-4'
        }
    },
    methods: {
        likeIt() {
            if (User.loggedIn()) {
                this.liked ? this.decrement() : this.increment();
                this.liked = !this.liked;
            }
        },
        increment() {
            axios.post(`/api/like/${this.content.id}`).then(
                (response) => this.count++
            )

        },
        decrement() {
            axios.delete(`/api/like/${this.content.id}`).then(
                (response) => this.count--
            )
        }
    },
};
</script>

<style scoped>
</style>
