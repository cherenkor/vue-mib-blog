<template>
  <v-layout wrap>
    <Post-Item v-for="post in list" :key="post.id" :post="post"/>
  </v-layout>
</template>

<script>
import PostItem from "./PostItem";

export default {
  components: {
    PostItem
  },
  props: {
    list: {
      type: Array,
      required: true,
      default() {
        return [];
      }
    }
  }
};
</script>

<style lang="scss" scoped>
</style>