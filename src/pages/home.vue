<template>
  <v-container>
    <v-row justify="space-between">
      <v-col cols="6">
        <span>{{ toneladas }} Toneladas</span>
      </v-col>
      <v-col cols="6">
        <v-row justify="end">
          <v-col cols="6">
            <v-select
              :items="items"
              label="Ordenar por"
              outlined
            ></v-select>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="4" v-for="user in data" :key="user.id">
        <cardHuella :data="user" />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { mapState } from "vuex";
import { data } from "../mocks/data";
import cardHuella from "../components/cardHuella.vue";

export default {
  components: {
    cardHuella,
  },
  data: () => ({
    data: data,
    items: ["Menor a Mayor", "Mayor a Menor"],
    order: ""
  }),

  computed: {
    ...mapState("huella", {
      toneladas: "toneladas",
      points: "points",
    }),
  },
  created() {
    this.$store.commit("layout/SET_LAYOUT", "principal-layout");
  }
};
</script>

<style scoped>
span {
  font-family: "Mulish";
  font-size: 20px;
  font-weight: 400;
  color: #323f4b;
  letter-spacing: 0.15;
  line-height: 24px;
}
</style>


