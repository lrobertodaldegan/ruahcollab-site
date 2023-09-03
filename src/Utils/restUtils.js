import axios from 'axios';

const BASEURL = 'https://acaodoespirito.com.br/ruahcollab'

const DEFAULT_HEADERS = {
  'X-Requested-With': 'XMLHttpRequest'
}

const get = async (urlPath, headers=DEFAULT_HEADERS, jwt='')=>{
  try{
    let response = await axios.get(`${BASEURL}${urlPath}`, {
      withCredentials:true,
      headers: {...headers, 'Authorization':localStorage.getItem('Authorization token')}
    });

    return response;
  }catch(err){
    console.log(err);

    return {status:500}
  }
}

const post = async (urlPath, body={}, headers=DEFAULT_HEADERS, jwt='') => {
  try{
    let response = await axios.post(`${BASEURL}${urlPath}`, body, {
      withCredentials:true,
      headers: {...headers, 'Authorization':localStorage.getItem('Authorization token')}
    });

    return response;
  }catch(err){
    console.log(err);

    return {status:500}
  }
}

const del = async (urlPath, headers=DEFAULT_HEADERS, jwt='') => {
  try{
    let response = await axios.delete(`${BASEURL}${urlPath}`, {
      withCredentials:true,
      headers: {...headers, 'Authorization':localStorage.getItem('Authorization token')}
    });

    return response;
  }catch(err){
    console.log(err);

    return {status:500}
  }
}

const put = async (urlPath, body={}, headers=DEFAULT_HEADERS, jwt='') => {
  try{
    let response = await axios.put(`${BASEURL}${urlPath}`, body, {
      withCredentials:true,
      headers: {...headers, 'Authorization':localStorage.getItem('Authorization token')}
    });

    return response;
  }catch(err){
    console.log(err);

    return {status:500}
  }
}

export {
  get,
  post,
  del,
  put
}