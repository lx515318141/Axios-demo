import base from "./base"
import axios from "../utils/http"

const shoplist = {
    shoplistData(){
        return axios.get(base.baseUrl + base.list)
    }
}

export default shoplist