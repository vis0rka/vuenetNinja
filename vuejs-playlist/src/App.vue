<template>
  <div>
    <add-blog></add-blog>
    <show-blog></show-blog>
  </div>
</template>

<script>
import AddBlog from "./components/addBlog";
import ShowBlog from "./components/showBlog";


export default {
  components: {
    'add-blog': AddBlog,
    'show-blog': ShowBlog
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
