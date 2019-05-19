<template>
  <div>
    <v-layout justify-center wrap>
      <v-flex xs12>
        <v-text-field
          @keydown.enter="localSignIn()"
          v-model="email"
          type="email"
          placeholder="Email"
          solo
          clearable
        ></v-text-field>
      </v-flex>
      <v-flex xs12>
        <v-text-field
          @keydown.enter="localSignIn()"
          v-model="password"
          type="password"
          placeholder="Password"
          solo
          clearable
        ></v-text-field>
      </v-flex>
      <v-flex x12>
        <v-btn @click="localSignIn()" :loading="isLoading">Sign In</v-btn>
      </v-flex>
    </v-layout>
  </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
  data() {
    return {
      isLoading: false,
      email: "",
      password: ""
    };
  },
  methods: {
    ...mapActions("authentication", ["signIn"]),
    localSignIn() {
      this.isLoading = true;

      this.signIn({ email: this.email, password: this.password }).then(
        () => (this.isLoading = false)
      );
    }
  }
};
</script>

<style lang="scss" scoped>
</style>