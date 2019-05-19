<template>
  <v-container class="tags">
    <div class="text-xs-center">
      <v-chip>Vue</v-chip>

      <v-chip>Life</v-chip>

      <v-chip>Development</v-chip>

      <v-chip>Colored Chip</v-chip>
    </div>
  </v-container>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.tags {
  background-color: $light-color;
  border-radius: $main-border-radius;

  & .v-chip {
    background-color: $info-color;
    color: $light-color;
  }
}
</style>