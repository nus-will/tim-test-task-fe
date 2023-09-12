
import axios from 'axios';
import { ApiMethod } from '../utils/constants';

const ApiCall = async (
  method: ApiMethod,
  path: string,
  data?: object,
) => {
  let userAuthorization = '';

  try {
    const headers = {
      'Accept': 'application/json',
      'Authorization': `Basic ${userAuthorization}`
    };

    const config: any = {
      method: method,
      url: path,
      headers: headers,
    };

    if (method === ApiMethod.GET) {
      if (data) {
        config.params = data;
      }
    } else {
      config.data = data;
    }
    const result = await axios(config);
    return result;
  } catch (error: any) {
    throw error.response;
  }
};


const Api = {
  get: (path: string, params?: object) => {
    return ApiCall(ApiMethod.GET, path, params);
  },
};

export default Api;
