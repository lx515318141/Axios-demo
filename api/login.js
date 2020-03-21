import base from "./base"
import axios from "../utils/http"

const login = {
    logined(params){
        console.log(params);
        return axios.post(base.baseUrl + base.login,params)
        
        
    }
}

export default login