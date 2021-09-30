import axios from 'axios'
import { useSelector } from 'react-redux';


const url = 'http://localhost:5000/volcanoes'


export const fetchVolcanoes = () => axios.get(url);
export const createVolcano = (newVolcano) => axios.post(url, newVolcano);
export const updateVolcano = (name, updatedVolcano) => axios.put(url+'/'+ name, updatedVolcano);
export const deleteVolcano = (name) => axios.delete(url+'/'+name);

export const searchVolcano = async (volcano)=>{
    const volcanoes = await fetchVolcanoes();
    let volcanoArray = [];
    volcanoes.data.map(volcanoData=>{

            if((volcanoData.name.toLowerCase().includes(volcano.name.toLowerCase()))) {
                volcanoArray.push(volcanoData)
            }
           
    })

    return volcanoArray;
}

