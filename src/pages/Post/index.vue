<template>
  <v-container class="post pa-0" :id="scroll.id">
    <v-btn
      class="post__go-back-btn ml-3"
      @click="goBack()"
      fixed
      center
      left
      fab
      dark
      :color="colors.success"
    >
      <v-icon dark>reply</v-icon>
    </v-btn>
    <v-img
      class="post__img elevation-12"
      :src="get('image', post)"
      :lazy-src="lazyImage"
      max-height="50vh"
      width="100%"
    ></v-img>
    <div class="post__content pa-2 mx-4 my-5 black--text">
      <h2 class="display-1 mb-4">{{ get('title', post) }}</h2>
      <div class="post__body" v-html="get('content', post)"></div>
    </div>
    <vue-scroll-indicator height="12px" :color="colors.info" :background="colors.light"></vue-scroll-indicator>
  </v-container>
</template>

<script>
import { mapActions, mapState } from "vuex";

export default {
  data() {
    return {
      scroll: {
        id: "post",
        offset: 48
      }
    };
  },
  mounted() {
    this.$vuetify.goTo(`#${this.scroll.id}`, { offset: this.scroll.offset });

    this.loadPostById(this.$route.params.id);
  },
  computed: {
    ...mapState("posts", ["post"])
  },
  methods: {
    ...mapActions("posts", ["loadPostById", "resetPost"])
  },
  beforeDestroy() {
    this.resetPost();
  }
};
</script>

<style lang="scss" scoped>
.post {
  background-color: $light-color;

  & h2 {
    color: $info-color;
  }

  &__go-back-btn {
    left: 4%;
  }
}

@media (max-width: 1024px) {
  .post {
    &__go-back-btn {
      position: absolute;
      bottom: 0;
      left: 70%;
    }
  }
}
</style>