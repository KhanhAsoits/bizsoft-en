import {makeAutoObservable} from "mobx";
import authApi from "../app/api/AuthApi";

class AuthModel {

    isFetching = false;
    authToken = '';


    isLogin = false;

    constructor() {
        makeAutoObservable(this)
    }

    setAuthToken = (token) => {
        this.authToken = token;
    }

    setIsAuth = (val) => {
        this.isLogin = val;
    }
    setFetching = (val) => {
        this.isFetching = val;
    }

    async Login(email, password, callback) {
        try {
            this.setFetching(true)
            setTimeout(async () => {
                const res = await authApi.Login(email, password);
                if (res?.token) {
                    this.setAuthToken(res.token)
                    this.setIsAuth(true)
                } else {
                    console.log('Cant find token res is : ', res)
                    callback()
                }
                this.setFetching(false)
            }, 2000)
        } catch (e) {
            console.log(e)
        }
    }
}

const authModel = new AuthModel();
export default authModel;