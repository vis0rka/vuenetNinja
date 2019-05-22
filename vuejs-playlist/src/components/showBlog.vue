<template>
  <div v-theme:column="'narrow'" id="show-blog">
    <h1>All Blog Articles</h1>
    <input type="text" v-model="search" placeholder="search in blogs">
    <div class="single-blog" v-for="blog in filteredBlogs">
      <router-link v-bind:to="`/blog/${blog.id}`">
        <h2 v-rainbow>{{ blog.title | to-uppercase }}</h2>
      </router-link>
      <article>{{ blog.content | snippet }}</article>
    </div>
  </div>
</template>

<script>
import searchMixin from "../mixins/searchMixin";

export default {
  data() {
    return {
      blogs: [],
      search: ""
    };
  },
  methods: {},
  created() {
    this.$http
      .get("https://testapp-fd1c4.firebaseio.com/posts.json")
      .then(response => response.json())
      .then(data => {
        const blogsArray = [];
        for (let key in data) {
          data[key].id = key;
          blogsArray.push(data[key]);
        }
        this.blogs = blogsArray;
      });
  },
  filters: {
    toUppercase(value) {
      return value.toUpperCase();
    }
  },
  directives: {
    rainbow: {
      bind(el, binding, vnode) {
        el.style.color =
          "#" +
          Math.random()
            .toString()
            .slice(2, 8);
      }
    }
  },
  mixins: [searchMixin]
};
</script>

<style scoped>
#show-blog {
  max-width: 800px;
  margin: 0 auto;
}
.single-blog {
  padding: 20px;
  margin: 20px 0;
  box-sizing: border-box;
  background: #eee;
}
</style>
