import BaseApi from "./BaseApi";
import axios from "axios";
import {configs} from "../configs/configs";
import alertModel from "../../models/AlertModel";

class AuthApi extends BaseApi {

    async GET(uri, params) {
        return super.GET(uri, params);
    }

    async Login(email, password) {
        try {
            console.log(`${configs.BASE_API_URI}/login?email=${email}&password=${password}`);
            const resp = await axios.post(`${configs.BASE_API_URI}/login?email=${email}&password=${password}`);
            return resp.data;
        } catch (e) {
            console.log(e)
        }
    }

}

const authApi = new AuthApi();
export default authApi;