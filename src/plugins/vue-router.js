import Vue from 'vue';
import VueRouter from 'vue-router';
import HomePage from "@/components/Home";
import BlogPage from "@/components/Blog"

Vue.use(VueRouter);


export default new VueRouter({
    mode: "hash",
    routes: [
        {path: '*', component: HomePage},
        {path: '/blog', component: BlogPage}
    ]
});
