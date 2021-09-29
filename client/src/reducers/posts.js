export default (state= [], action)=>{
    switch(action.type){
        case 'FETCH_ALL' :
            return action.payload
        case 'CREATE' :
            return [...state, action.payload]
        case 'UPDATE': 
            return state.map(post=> post.name == action.payload._name ? action.payload : post)    
        case 'DELETE':
            return state.filter(volcano=> volcano.name === action.payload);
        default:
            return state

    }
}