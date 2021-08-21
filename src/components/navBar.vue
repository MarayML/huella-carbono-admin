<template>
  <v-app-bar app color="white" dark clipped-left>
    <div class="d-flex align-center ml-3">
      <v-img
        alt="Vuetify Logo"
        class="shrink mr-2"
        contain
        src="../assets/logo.png"
        transition="scale-transition"
        width="46"
        height="56"
      />
    </div>

    <v-spacer></v-spacer>

    <v-btn text>
      <v-icon color="secondary">mdi-account-outline</v-icon>
    </v-btn>
  </v-app-bar>
</template>
