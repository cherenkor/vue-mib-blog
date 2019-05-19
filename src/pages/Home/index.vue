<template>
  <v-container>
    <Tags/>
    <!-- <div
      v-infinite-scroll="localLoadMore"
      infinite-scroll-disabled="isLoading"
      infinite-scroll-distance="10"
    >-->
    <Post-List :list="posts" class="mt-5"/>
    <v-layout justify-center>
      <v-progress-circular
        v-if="isLoading"
        :size="50"
        :width="8"
        :color="colors.primary"
        indeterminate
      ></v-progress-circular>
    </v-layout>
    <!-- </div> -->
  </v-container>
</template>

<script>
import PostList from "@/components/posts/PostList";
import Tags from "@/components/tags/TagList";

import { mapState, mapActions } from "vuex";

export default {
  components: {
    PostList,
    Tags
  },
  data() {
    return {
      isLoading: true
      // posts: []
    };
  },
  // firestore() {
  //   return {
  //     posts: db
  //       .collection("posts")
  //       .orderBy("title")
  //       .get()
  //       .then(() => (this.isLoading = false))
  //   };
  // },
  async mounted() {
    await this.loadPosts();
    this.isLoading = false;
  },
  computed: {
    ...mapState("posts", ["posts"])
  },
  methods: {
    ...mapActions("posts", ["loadPosts", "loadMorePosts"]),
    localLoadMore() {
      this.isLoading = true;
      this.loadMorePosts().then(() => (this.isLoading = false));
    }
  }
};
</script>

<style lang="scss" scoped>
h1 {
  color: $light-color;
}
</style>

