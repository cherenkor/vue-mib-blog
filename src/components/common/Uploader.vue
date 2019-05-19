<template>
  <div class="mb-4">
    <div v-if="!image">
      <input type="file" @change="onFileChange">
    </div>
    <div v-else>
      <v-img :src="image" :lazy-src="lazyImage" width="100%"></v-img>
      <v-btn class="mt-3" @click="removeImage">Remove image</v-btn>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      image: ""
    };
  },
  methods: {
    onFileChange(e) {
      const files = e.target.files || e.dataTransfer.files;
      if (!files.length) return;
      this.createImage(files[0]);
    },
    createImage(file) {
      const reader = new FileReader();
      const vm = this;

      reader.onload = e => {
        const imageData = e.target.result;
        vm.image = imageData;
        vm.$emit("onSave", imageData);
      };
      reader.readAsDataURL(file);
    },
    removeImage() {
      this.image = "";
    }
  }
};
</script>

<style lang="scss" scoped>
</style>