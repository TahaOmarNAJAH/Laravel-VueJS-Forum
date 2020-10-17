<template>
<div class="">
    <markdown-editor class="mt-8" :options="options" v-model="edited.reply"></markdown-editor>
    <v-card-actions>
        <v-btn  class="ma-2" color="primary" dark @click="update">
            Edit
            <v-icon dark right> mdi-pencil-circle </v-icon>
        </v-btn>
        <v-btn  class="ma-2" dark @click="cancel">
            Cancel
            <v-icon dark left> mdi-minus-circle </v-icon>
        </v-btn>
    </v-card-actions>
</div>
</template>

<script>
export default {
    name: "EditReply",
    props: ['edited'],
    methods:{
        update(){
            axios.put(`/api/question/${this.edited.question_slug}/reply/${this.edited.id}`,{body:this.edited.reply}).then(
                (response)=>{
                    this.cancel(this.edited.reply);
                }
            )
        },
        cancel(reply){
            EventBus.$emit('cancelEditing',reply);
        }

    },
    data() {
        return {
            reply: "",
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
};
</script>

<style scoped>
</style>
