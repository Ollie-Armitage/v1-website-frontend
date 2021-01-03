import BlogService from "@/api/BlogService";

const state = {
    blogPosts: []
}

const getters = {
    allBlogPosts: (state) => state.blogPosts
};

const actions = {
    async fetchBlogPosts({ commit }){
        const response =  await BlogService.getBlogPosts()
        commit('setBlogPosts', response)
    }
};

const mutations = {
    setBlogPosts: (state, blogPosts) => (state.blogPosts = blogPosts)
};

export default {
    state, getters, actions, mutations
}
