export default {
    // actions calls mutations that updates the state
    addPet : ({commit},payload) => {
        commit('appendPet',payload)
    }
}