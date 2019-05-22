import ShowBlogs from './components/showBlog.vue';
import AddBlog from './components/addBlog.vue';
import SingleBlog from './components/singleBlog.vue';


export default [
  { path: '/', component: ShowBlogs },
  { path: '/add', component: AddBlog },
  { path: '/blog/:id', component: SingleBlog }
]