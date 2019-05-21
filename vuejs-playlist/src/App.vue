<template>
  <div>
    <add-blog></add-blog>
  </div>
</template>

<script>
import AddBlog from "./components/addBlog";

export default {
  components: {
    'add-blog':AddBlog
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
