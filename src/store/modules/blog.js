import BlogService from "@/api/BlogService";

const state = {
    blogPosts: []
}

const getters = {
    allBlogPosts: (state) => state.blogPosts
};

const actions = {
    async fetchBlogPosts({ commit }){
        const response =  await BlogService.getBlogPost()
        commit('setBlogPosts', response)
    }
};

const mutations = {
    setBlogPosts: (state, blogPosts) => (state.projects = blogPosts)
};

export default {
    state, getters, actions, mutations
}
