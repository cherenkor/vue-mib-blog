<template>
  <v-container>
    <div v-if="isAuthenticated">
      <h2 class="display-1 mb-4">Create new post</h2>

      <Uploader ref="uploader" @onSave="saveImage"></Uploader>

      <v-text-field v-model="title" label="Title" solo clearable></v-text-field>

      <Tiny-Editor v-model="content"/>

      <v-layout justify-center class="mt-4">
        <v-btn @click="save" :loading="isLoading">Save</v-btn>
      </v-layout>
    </div>

    <div v-else>
      <Sign-In/>
    </div>
    <v-snackbar v-model="snackbar.state" top center :timeout="snackbar.timeout">
      {{ snackbar.text }}
      <v-btn color="pink" flat @click="snackbar = false">Close</v-btn>
    </v-snackbar>
  </v-container>
</template>

<script>
import SignIn from "./SignIn";
import Uploader from "@/components/common/Uploader";
import TinyEditor from "@/components/common/TinyMCEditor";
import { mapActions, mapState } from "vuex";

export default {
  components: {
    SignIn,
    Uploader,
    TinyEditor
  },
  data() {
    return {
      isLoading: false,
      snackbar: {
        state: false,
        timeout: 5000,
        text: ""
      },
      image: "",
      title: "",
      content: ""
    };
  },
  computed: {
    ...mapState("authentication", ["isAuthenticated"])
  },
  methods: {
    ...mapActions("posts", ["savePost"]),
    save() {
      this.isLoading = true;

      const { image, title, content } = this;
      const post = {
        image,
        title,
        content,
        createdAt: new Date()
      };

      this.savePost(post).then(({ error }) => {
        this.isLoading = false;
        this.snackbar.text = "Successfully added";

        if (error) this.snackbar.text = "Something went wrong";

        this.snackbar.state = true;

        if (!error) this.clearInputs();
      });
    },
    saveImage(imageData) {
      this.image = imageData;
    },
    clearInputs() {
      this.$refs.uploader.removeImage();
      this.image = "";
      this.title = "";
      this.content = ";";
    }
  }
};
</script>

<style lang="scss">
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
