import base from "./base"
import axios from "../utils/http"

const banner = {
    bannerData(){
        return axios.get(base.baseUrl + base.banner)
    }
}

export default banner