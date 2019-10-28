export default {
    appendPet : (state,{species,pet}) => {
        console.log('appendPet')
        state[species].push(pet)
    }
}