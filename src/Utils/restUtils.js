import axios from 'axios';

const BASEURL = 'http://localhost:8080'

const DEFAULT_HEADERS = {
  'X-Requested-With': 'XMLHttpRequest'
}

const get = async (urlPath, headers=DEFAULT_HEADERS)=>{
  try{
    let response = await axios.get(`${BASEURL}${urlPath}`, {
      withCredentials:true,
      headers:headers
    });

    return response;
  }catch(err){
    console.log(err);

    return {status:500}
  }
}

const post = async (urlPath, body={}, headers=DEFAULT_HEADERS) => {
  try{
    let response = await axios.post(`${BASEURL}${urlPath}`, body, {
      withCredentials:true,
      headers:headers
    });

    return response;
  }catch(err){
    console.log(err);

    return {status:500}
  }
}

const del = async (urlPath, headers=DEFAULT_HEADERS) => {
  try{
    let response = await axios.delete(`${BASEURL}${urlPath}`, {
      withCredentials:true,
      headers:headers
    });

    return response;
  }catch(err){
    console.log(err);

    return {status:500}
  }
}

const put = async (urlPath, body={}, headers=DEFAULT_HEADERS) => {
  try{
    let response = await axios.put(`${BASEURL}${urlPath}`, body, {
      withCredentials:true,
      headers: headers
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