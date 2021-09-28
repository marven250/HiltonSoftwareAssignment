export default (volcanoes= [], action)=>{
    switch(action.type){
        case 'FETCH_ALL' :
            return action.payload
        case 'CREATE' :
            return [...volcanoes, action.payload]
        case 'UPDATE': 
            return volcanoes.map(post=> post.name == action.payload._name ? action.payload : post)    
        case 'DELETE':
            return volcanoes.filter(volcano=> volcano.name === action.payload);
        default:
            return volcanoes
            
    }
}