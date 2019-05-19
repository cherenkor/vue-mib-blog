<template>
  <v-toolbar class="elevation-0 px-5" :style="`margin-top: ${margin}`">
    <v-toolbar-title @click="goToPage('/')" class="headline text-uppercase pointer-anim">
      <span>MIB</span>
      <span class="ml-2 font-weight-light text-capitalize">Blog</span>
    </v-toolbar-title>

    <v-spacer></v-spacer>

    <v-menu offset-y>
      <template v-slot:activator="{ on }">
        <v-toolbar-side-icon v-on="on" class="hidden-sm-and-up"></v-toolbar-side-icon>
      </template>
      <v-list>
        <v-list-tile v-for="item in menu" :key="item.title" @click="goToPage(item.path)">
          <v-list-tile-title>{{ item.title }}</v-list-tile-title>
        </v-list-tile>
      </v-list>
    </v-menu>

    <v-toolbar-items class="hidden-xs-only">
      <v-btn v-for="item in menu" :key="item.title" :to="item.path" flat>
        <span class="mr-2">{{ item.title }}</span>
      </v-btn>
    </v-toolbar-items>
  </v-toolbar>
</template>

<script>
export default {
  data() {
    return {
      menu: [
        { title: "Blog", path: "/" },
        { title: "About", path: "/about" },
        { title: "Contacts", path: "/contacts" }
      ]
    };
  },
  computed: {
    isPostPage() {
      return this.$route.name === "post";
    },
    margin() {
      return this.isPostPage ? "12px" : "";
    }
  }
};
</script>

<style lang="scss" scoped>
.v-toolbar {
  background-color: $light-color;
}
.theme--light.v-btn--active {
  background: $info-color;
  color: $light-color;
}
</style>