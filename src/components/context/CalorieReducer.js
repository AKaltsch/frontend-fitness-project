export default (state, action) => {
    switch(action.type) {
        case 'DELETE_ENTRY':
            return {
                ...state,
                entries: state.entries.filter(entry => entry.id !== action.payload)
            }
        case 'ADD_ENTRY':
            return {
                ...state,
                entries: [action.payload, ...state.entries]
            }
        default:
            return state;
    }
}