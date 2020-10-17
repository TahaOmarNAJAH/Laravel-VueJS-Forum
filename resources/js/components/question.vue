 <template>
  <v-card elevation="2" outlined class="mt-4">
    <v-card-title>
      <div>
        <router-link :to="data.path">
          <div class="headline">{{ data.title }}</div>
        </router-link>
      </div>
    </v-card-title>
    <v-card-subtitle >
      <div class="title">{{ data.user }} </div>
      <div class="body-2">{{ data.created_at }}</div> 
      </v-card-subtitle>
    <v-card-text>
      {{ data.body }}
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  name: "question",
  props: ["data"],
};
</script>

<style scoped>
</style>