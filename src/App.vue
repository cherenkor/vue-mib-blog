<template>
  <v-app>
    <App-Header/>

    <v-content class="page">
      <router-view class="my-4"/>
    </v-content>

    <App-Footer/>
  </v-app>
</template>

<script>
import AppHeader from "@/components/_layout/AppHeader";
import AppFooter from "@/components/_layout/AppFooter";

export default {
  name: "App",
  components: {
    AppHeader,
    AppFooter
  },
  data() {
    return {
      //
    };
  }
};
</script>

<style lang="scss">
.page {
  background-color: $dark-color;
  color: $light-color;
}
</style>

