<template>
  <v-app>
    <!-- expand-on-hover -->
    <!-- :mini-variant.sync="mini" -->
    <v-col cols="12">
      <navBar />
      <v-col cols="3">
        <v-navigation-drawer
          width="200"
          color="#FFFFFF"
          v-model="drawer"
          app
          :mini-variant="miniVariant"
          clipped
        >
          <v-list-item link @click.stop="miniVariant = !miniVariant">
            <v-list-item-icon>
              <v-icon color="black">mdi-filter-outline</v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title class="txtlistItem">Filtros</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
          <v-divider></v-divider>
          <v-list dense>
            <v-list-item-group> </v-list-item-group>
          </v-list>

          <template v-slot:append>
            <v-list-item link @click.prevent="signOut">
              <v-list-item-action>
                <v-icon>mdi-power-settings</v-icon>
              </v-list-item-action>
              <v-list-item-content>
                <v-list-item-title class="txtlistItem" @click.prevent="signOut"
                  >Cerrar Sesión</v-list-item-title
                >
              </v-list-item-content>
            </v-list-item>
          </template>
        </v-navigation-drawer>
      </v-col>
      <v-col cols="12">
        <v-content>
          <router-view></router-view>
          <Footer />
        </v-content>
      </v-col>
    </v-col>
  </v-app>
</template>

<script>
import navBar from "../navBar.vue";
import Footer from "../footer.vue";

export default {
  components: {
    navBar,
    Footer,
  },
  props: {
    source: String,
  },
  data: () => ({
    drawer: true,
    miniVariant: false,
  }),
  methods: {
    signOut() {
      localStorage.removeItem("token");
      this.$router.push("/");
    },
  },
};
</script>

<style>
.txtlistItem {
  font-family: "Mulish";
  font-size: 16px;
  font-weight: 700;
}
</style>
