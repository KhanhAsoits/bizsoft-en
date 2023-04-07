import {configs} from "../configs/configs";
import axios from "axios";

export default class BaseApi {


    async GET(uri, params) {
        const key = Object.keys(params)
        let paramsStr = '';
        for (let item in params) {
            paramsStr += key + "=" + params[key] + "&";
        }

        paramsStr = paramsStr.slice(0, paramsStr.length - 1)
        return await axios.get(`${configs.BASE_API_URI}/${uri}?${paramsStr}`);
    }

}