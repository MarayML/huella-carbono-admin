<template>
  <v-col cols="12" align-self="center">
    <v-row justify="center" class="mt-4">
      <v-img
        alt="Login Logo"
        class="shrink"
        contain
        src="../assets/login.png"
        transition="scale-transition"
        width="300"
        height="320"
    /></v-row>
    <p class="txtLabel">INDICA LA CANTIDAD DE C02 EN TONELADAS QUE QUIERES COMPRAR</p>
    <v-form action="#" @submit.prevent="submit">
     <v-row justify="center"><v-col cols="3"><v-text-field outlined v-model="toneladas"></v-text-field></v-col></v-row>
      <v-row justify="center">
        <v-btn
          color="secondary"
          class="text-capitalize white--text rounded-pill"
          width="220"
          :loading="loadingBtn"
          :disabled="loadingBtn"
          @click="submit"
        >
          <span class="txtBtn">CONTINUAR</span>
          <template v-slot:loader>
            <span>Cargando...</span>
          </template>
        </v-btn>
      </v-row>
    </v-form>
  </v-col>
</template>

<script>

export default {
  created() {
    this.$store.commit("layout/SET_LAYOUT", "login-layout");
  },
  data() {
    return {
      toneladas: "",
      loadingBtn: false,
    };
  },
  methods: {
    async submit() {
      this.loadingBtn = true;
      try {
         this.$store.commit("huella/SET_TONELADAS", this.toneladas);
        this.goToPageHome();
      } catch (error) {
        console.log(error);
        this.showAlertError(JSON.parse(error.message).error);
        this.loadingBtn = false;
      }
    },

    goToPageHome() {
      this.$router.push("/home");
      this.loadingBtn = false;
    },

    showAlertError(msg) {
      this.error = true;
      this.errorTxt = msg;
      setTimeout(() => {
        this.error = false;
        this.errorTxt = "";
      }, 3000);
    },
  },
};
</script>

<style lang="scss" scoped>
.txtLabel{
  text-align: center;
  font-family: "Mulish";
  font-size: 12px;
  margin-top: 20px;
  font-weight: 800;
  color: black;
  margin-bottom: 25px;
}
.txtBtn{
  font-family: "Mulish";
  font-size: 10px;
}
</style>
