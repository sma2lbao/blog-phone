export default {
    toggleMenu (state) {
        state.needMenu = !state.needMenu;
    },
    addComment (state, obj) {
        console.log(state.commentData);
        state.commentData.push(obj);
    }
}
