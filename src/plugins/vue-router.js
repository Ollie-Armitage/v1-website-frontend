import Vue from 'vue';
import VueRouter from 'vue-router';
import HomePage from "@/components/Home";
import BlogPage from "@/components/Blog"

Vue.use(VueRouter);


export default new VueRouter({
    mode: "history",
    routes: [
        {path: '*', component: HomePage, meta: {
            title: 'Ollie Armitage Portfolio'
            }},
        {path: '/blog', component: BlogPage, meta: {
            title: 'Blog'
            }}
    ]
});
