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
    <v-img class="post__img elevation-12" :src="get('image', post)" :lazy-src="lazyImage"></v-img>
    <div class="post__content pa-2 mx-4 my-5 black--text">
      <h2 class="display-1 mb-5">{{ get('title', post) }}</h2>
      <p
        class="post__body subheading"
      >Lorem ipsum dolor sit, amet consectetur adipisicing elit. Temporibus sequi quasi quisquam accusantium voluptatibus consequuntur architecto dolores, dicta quod officia provident esse molestiae excepturi cumque, facilis repellendus quia perferendis vero.</p>
      <p class="post__body subheading">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque dicta magnam accusantium sed deserunt porro nisi tempora sit impedit beatae illo ullam, minima necessitatibus expedita a repudiandae assumenda facere quaerat.
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aspernatur obcaecati alias facilis. Iure reiciendis suscipit fugiat velit ducimus reprehenderit voluptatum sit voluptas error nostrum consectetur soluta dicta, debitis quas distinctio.
      </p>
      <p class="post__body subheading">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque dicta magnam accusantium sed deserunt porro nisi tempora sit impedit beatae illo ullam, minima necessitatibus expedita a repudiandae assumenda facere quaerat.
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aspernatur obcaecati alias facilis. Iure reiciendis suscipit fugiat velit ducimus reprehenderit voluptatum sit voluptas error nostrum consectetur soluta dicta, debitis quas distinctio.
      </p>
      <p class="post__body subheading">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque dicta magnam accusantium sed deserunt porro nisi tempora sit impedit beatae illo ullam, minima necessitatibus expedita a repudiandae assumenda facere quaerat.
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aspernatur obcaecati alias facilis. Iure reiciendis suscipit fugiat velit ducimus reprehenderit voluptatum sit voluptas error nostrum consectetur soluta dicta, debitis quas distinctio.
      </p>
      <p class="post__body subheading">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque dicta magnam accusantium sed deserunt porro nisi tempora sit impedit beatae illo ullam, minima necessitatibus expedita a repudiandae assumenda facere quaerat.
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aspernatur obcaecati alias facilis. Iure reiciendis suscipit fugiat velit ducimus reprehenderit voluptatum sit voluptas error nostrum consectetur soluta dicta, debitis quas distinctio.
      </p>
      <p class="post__body subheading">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque dicta magnam accusantium sed deserunt porro nisi tempora sit impedit beatae illo ullam, minima necessitatibus expedita a repudiandae assumenda facere quaerat.
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aspernatur obcaecati alias facilis. Iure reiciendis suscipit fugiat velit ducimus reprehenderit voluptatum sit voluptas error nostrum consectetur soluta dicta, debitis quas distinctio.
      </p>
      <p class="post__body subheading">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque dicta magnam accusantium sed deserunt porro nisi tempora sit impedit beatae illo ullam, minima necessitatibus expedita a repudiandae assumenda facere quaerat.
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aspernatur obcaecati alias facilis. Iure reiciendis suscipit fugiat velit ducimus reprehenderit voluptatum sit voluptas error nostrum consectetur soluta dicta, debitis quas distinctio.
      </p>
      <p class="post__body subheading">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque dicta magnam accusantium sed deserunt porro nisi tempora sit impedit beatae illo ullam, minima necessitatibus expedita a repudiandae assumenda facere quaerat.
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aspernatur obcaecati alias facilis. Iure reiciendis suscipit fugiat velit ducimus reprehenderit voluptatum sit voluptas error nostrum consectetur soluta dicta, debitis quas distinctio.
      </p>
    </div>
    <vue-scroll-indicator height="12px" :color="colors.info" :background="colors.light"></vue-scroll-indicator>
  </v-container>
</template>

<script>
import { path } from "ramda";
import { mapActions, mapGetters } from "vuex";

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
    this.loadPosts();
  },
  computed: {
    ...mapGetters("posts", ["getPostsMap"]),
    post() {
      const id = this.$route.params.id;
      return path([id], this.getPostsMap);
    }
  },
  methods: {
    ...mapActions("posts", ["loadPosts"])
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