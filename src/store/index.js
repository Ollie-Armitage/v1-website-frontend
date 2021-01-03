import Vue from 'vue'
import Vuex from 'vuex'
import projects from "@/store/modules/projects";
import blog from '@/store/modules/blog'

Vue.use(Vuex)

export default new Vuex.Store({
    modules: {
        projects,
        blog
    }
})
