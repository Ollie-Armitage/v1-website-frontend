import ProjectService from "@/api/ProjectService";

const state = {
    projects: []
}

const getters = {
    allProjects: (state) => state.projects
};

const actions = {
    async fetchProjects({ commit }){
        const response =  await ProjectService.getProjects()
        commit('setProjects', response)
    }
};

const mutations = {
    setProjects: (state, projects) => (state.projects = projects)
};

export default {
    state, getters, actions, mutations
}
