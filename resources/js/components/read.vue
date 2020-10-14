<template>
  <div v-if="question">
    <edit-question v-if="editing" :data="question"></edit-question>
    <div v-else>
      <show-question :data="question" ></show-question>
    </div>
    
  </div>
</template>

<script>
import ShowQuestion from "./ShowQuestion";
import EditQuestion from "./EditQuestion";
export default {
  name: "read",
  components: {
    ShowQuestion,
    EditQuestion
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