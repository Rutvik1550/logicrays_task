import axios from "axios"

export const get = async (url) => {
  return await http(url, 'get');
}

const http = async (url, method, body) => {
  try {
    if(method === 'post' || method === 'delete' || method === 'put') {
      const json = await axios[method]({
        url,
        method,
        data: body
      })
      if(json.data) {
        return json.data;
      }
    } else {
      const json = await axios({
        url,
        method
      })
      if(json.data) {
        return json.data;
      }
    }
  } catch (e) {
    console.log('Error with HttpUtil: ',e)
  }
}