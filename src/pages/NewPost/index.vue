<template>
  <v-container>
    <h2 class="display-1 mb-4">Create new post</h2>

    <Uploader @onSave="saveImage"></Uploader>

    <v-text-field v-model="title" label="Title" solo clearable></v-text-field>

    <Tiny-Editor v-model="content"/>

    <v-layout justify-center class="mt-4">
      <v-btn @click="savePost">Save</v-btn>
    </v-layout>
  </v-container>
</template>

<script>
import Uploader from "@/components/common/Uploader";
import TinyEditor from "@/components/common/TinyMCEditor";

export default {
  components: {
    Uploader,
    TinyEditor
  },
  data() {
    return {
      image: "",
      title: "",
      content: ""
    };
  },
  methods: {
    savePost() {
      const { image, title, content } = this;
      const post = {
        image,
        title,
        content
      };
      console.log(post);
    },
    saveImage(imageData) {
      this.image = imageData;
    }
  }
};
</script>

<style lang="scss">
.v-text-field {
}

#editor {
  background-color: $light-color;
  color: $black-color;
  text-align: center;

  h1 {
    background: -webkit-linear-gradient(#fff, #999);
    -webkit-text-fill-color: transparent;
    -webkit-background-clip: text;
    text-align: center;
    margin: 0 0 5px 0;
    font-weight: 900;
    font-size: 4rem;
    color: #fff;
  }
  h4 {
    color: lighten(#5c3d86, 30%);
    text-align: center;
    margin: 0 0 35px 0;
    font-weight: 400;
    font-size: 24px;
  }
}
</style>
