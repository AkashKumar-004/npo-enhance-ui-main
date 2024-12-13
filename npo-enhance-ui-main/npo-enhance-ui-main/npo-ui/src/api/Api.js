import axios from "axios";
import { data } from "react-router-dom";
const API="http://localhost:7777";
const getdesboard=()=>axios.get(`${API}/desboard/all`)
const getdonation=()=>axios.get(`${API}/donation/all`)
const getevent=()=>axios.get(`${API}/event/all`)
const getnotifi=()=>axios.get(`${API}/notifi/all`)
const getservice=()=>axios.get(`${API}/servicess/all`)
const getuser=()=>axios.get(`${API}/user/all`)
const getvol=()=>axios.get(`${API}/vol/all`)
const getvolsec=()=>axios.get(`${API}/volsec/all`)
const addservice=(formData)=>axios.post(`${API}/servicess/add`,formData)
const deleteservice=(id)=>axios.delete(`${API}/servicess/delete/${id}`)
const updateservice=(id,data)=>axios.put(`${API}/servicess/edits/${id}`,data)
const addevent=(formData)=>axios.post(`${API}/event/add`,formData)
const deleteevent=(id)=>axios.delete(`${API}/event/delete/${id}`)
const addvol=(formData)=>axios.post(`${API}/vol/add`,formData)
const deletedvol=(id)=>axios.delete(`${API}/volsec/delete/${id}`)
const updateevent=(id,data)=>axios.put(`${API}/event/edits/${id}`,data)
export{getdesboard,getdonation,getevent,getnotifi,getservice,getuser,getvol,getvolsec,addservice,deleteservice,updateservice,addevent,deleteevent,updateevent,addvol,deletedvol}
