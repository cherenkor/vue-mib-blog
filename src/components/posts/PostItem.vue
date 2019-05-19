<template>
  <v-flex xs12 sm6 md4 class="my-4 pointer">
    <v-card @click="goToPage(`/posts/${post.id}`)" class="post px-1 mx-2 mt-3">
      <div class="post__image">
        <v-img height="250" class="elevation-12" :src="post.image" :lazy-src="lazyImage"></v-img>
      </div>
      <v-card-title class="post__title pb-0">
        <h1 class="title font-weight-medium">{{ post.title }}</h1>
      </v-card-title>
    </v-card>
  </v-flex>
</template>

<script>
export default {
  props: {
    post: {
      type: Object,
      required: true,
      default() {
        return {
          id: null,
          title: "",
          image: ""
        };
      }
    }
  }
};
</script>

<style lang="scss" scoped>
$offset: -2em;

.post {
  background-color: $light-color;

  &__title {
    min-height: 110px;
    position: relative;
    top: $offset;
    color: $info-color;
  }

  &__image {
    position: relative;
    top: $offset;
    padding: 0 12px;
    transition: all $transition-time;

    &:hover {
      transform: scale(1.1);
    }
  }
}

.v-card,
.v-image {
  border-radius: $main-border-radius;
}
</style>