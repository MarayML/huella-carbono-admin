<template>
  <v-app>
    <navBar />
    <v-container class="fill-height d-flex justify-center" fluid>
      <v-row align="center" justify="center">
        <router-view></router-view>
      </v-row>
    </v-container>
  </v-app>
</template>

<script>
import navBar from "../navBar.vue";

export default {
  components: {
    navBar,
  },
};
</script>


