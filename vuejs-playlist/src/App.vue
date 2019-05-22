<template>
  <div>
    <app-header></app-header>
    <router-view></router-view>
  </div>
</template>

<script>
import AddBlog from "./components/addBlog";
import ShowBlog from "./components/showBlog";
import ListBlogs from "./components/listBlog";
import Header from "./components/navHeader";

export default {
  components: {
    "add-blog": AddBlog,
    "show-blog": ShowBlog,
    "list-blogs": ListBlogs,
    "app-header": Header
  },
  data() {
    return {};
  }
};
</script>

<style scoped>
body {
  margin: 0;
  font-family: "Nunito SemiBold";
}
</style>
