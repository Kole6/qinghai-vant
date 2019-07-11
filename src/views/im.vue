<template>
  <v-app>
    <v-toolbar dark color="#4BBAF4" fixed>
      <v-icon dark left @click="goBack">arrow_back</v-icon>
      <v-spacer></v-spacer>
      <v-toolbar-title>{{title}}</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-icon medium @click="goHome">home</v-icon>
    </v-toolbar>

    <v-content style="margin-top:56px">
      <router-view/>
    </v-content>
  </v-app>
</template>
<script>
export default {
  data() {
    return {
      drawer: null,
      title: ""
    };
  },
  mounted() {
    this.title = this.$route.meta ? this.$route.meta.title : "";
  },
  watch: {
    $route(to, from) {
      this.title = this.$route.meta ? this.$route.meta.title : "";
    }
  },
  methods: {
    goBack() {
      if (this.$route.meta && this.$route.meta.back) {
        this.$router.push({ path: this.$route.meta.back });
      } else {
        window.history.back(-1);
      }
    },
    goHome() {
      this.$router.push({ path: "/home" });
    }
  }
};
</script>
<style lang='scss' scoped>
</style>