<template>
  <v-footer inset app color="white">
    <v-row justify="space-between" class="footer">
      <v-col cols="6" class="px-0 py-0">
        <v-row class="my-0 py-0">
          <v-col cols="4" class="my-0 py-0"><p>Precio por tonelada</p></v-col>
          <v-col cols="2" class="my-0 py-0"
            ><span style="font-weight: 400">$ 7.60</span></v-col
          >
        </v-row>
        <v-row class="py-0 my-0">
          <v-col cols="4" class="my-0 py-0"><p>Importe a pagar</p></v-col>
          <v-col cols="2" class="my-0 py-0">${{ points * 7.6 }}</v-col>
        </v-row>
      </v-col>
      <v-col cols="6" >
        <v-row justify="end" align="center">
          <v-btn
            color="secondary"
            class="text-capitalize white--text rounded-pill"
            width="100"
            :loading="loadingBtn"
            :disabled="loadingBtn"
            @click="submit"
          >
            <span class="txtBtn">Comprar</span>
            <template v-slot:loader>
              <span>Cargando...</span>
            </template>
          </v-btn>
        </v-row>
      </v-col>
    </v-row>
  </v-footer>
</template>

<script>
import { mapState } from "vuex";

export default {
  data() {
    return {
      loadingBtn: false,
    };
  },
  computed: {
    ...mapState("huella", {
      points: "points",
    }),
  },
};
</script>

<style scoped>
p {
  font-family: "Mulish";
  font-size: 16px;
  color: #323f4b;
  font-weight: bold;
  margin: 0;
  padding: 0;
}
.footer {
  border-radius: 16px;
  border: 1px solid blue;
  padding: 10px 20px;
  margin: 10px;
  background-color: white;
}
.txtBtn{
  font-family: "Mulish";
  font-size: 15px;
  font-weight: 700;

}
</style>
