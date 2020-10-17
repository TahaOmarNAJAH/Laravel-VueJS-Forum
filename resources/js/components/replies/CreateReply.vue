<template>
<div class="mb-12">
    <form @submit.prevent="create">
        <markdown-editor class="mt-8" ref="md" :options="options" v-model="body"></markdown-editor>
        <v-btn color="primary mt-2" type="submit">Reply</v-btn>
    </form>
</div>
</template>

<script>
export default {
    name: "CreateReply",
    props: ['questionSlug'],
    data() {
        return {
            body: '',
            options: {
                lineNumbers: true,
                styleActiveLine: true,
                styleSelectedText: true,
                lineWrapping: true,
                indentWithTabs: true,
                tabSize: 2,
                indentUnit: 2,
            },
        }
    },
    methods: {
        create() {
            axios.post(`/api/question/${this.questionSlug}/reply`, {
                    body: this.body
                })
                .then(res => {
                    this.body = '';
                    EventBus.$emit('newReply', res.data.reply)
                    window.scrollTo(0, 0)
                })
        }
    }
}
</script>

<style scoped>

</style>
