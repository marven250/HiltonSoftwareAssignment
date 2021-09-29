import * as api from '../api';

export const getPosts = () => async (dispatch)=>{
    try{
        const {data} = await api.fetchVolcanoes();
        if(data){
            dispatch({type: 'FETCH_ALL', payload: data});
        }

    } catch (error){
        console.error(error);
    }
}


export const createVolcano = (volcano)=> async (dispatch)=>{
    try{
        const {data} = await api.createVolcano(volcano);
        if(data){
        dispatch({type: 'CREATE', payload: data})
        }
    }catch(error){
        console.error(error)
    }
}

export const updateVolcano = (name, updatedVolcano) => async (dispatch) =>{
    try{
        const {data} = await api.updateVolcano(name, updatedVolcano);

        if(data){
            dispatch({type: 'UPDATE', payload: data})
        }
    }catch(error){
        console.error(error)
    }
}

export const deleteVolcano = (name) => async (dispatch) =>{
    try{
        await api.deleteVolcano(name);


        dispatch({type: 'DELETE', payload: name})
        
    }catch(error){
        console.error(error)
    }
}