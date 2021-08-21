<template>
  <component :is="layout"></component>
</template>
<script>


import { mapState } from "vuex";
import LoginLayout from "@/components/layouts/login";
import PrincipalLayout from "@/components/layouts/principal";

export default {
  components: { LoginLayout, PrincipalLayout },
  computed: {
    ...mapState('layout', {
      layout: 'layout',
    }),
  },
};
</script>

<style>
/* @import url('https://fonts.googleapis.com/css2?family=Mulish:wght@800&display=swap'); */
@import url('https://fonts.googleapis.com/css2?family=Mulish:wght@200&display=swap');
</style>
