import axios from 'axios'

const url = 'http://localhost:5000/volcanoes'


export const fetchVolcanoes = () => axios.get(url);
export const createVolcano = (newVolcano) => axios.post(url, newVolcano);
export const updateVolcano = (name, updatedVolcano) => axios.put(url+'/'+ name, updatedVolcano);
export const deleteVolcano = (name) => axios.delete(url+'/'+name);

