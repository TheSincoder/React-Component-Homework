import {create} from "apisauce";
import base64 from "base-64";

const apiClient = (email, password, cancelToken) => create(
    {
        baseURL: "https://cae-bootstore.herokuapp.com/",
        headers:{
            Authorization: "Basic "+ base64.encode(email+":"+password) //npm install base-64
        },
        cancelToken //:cancelToken //you don't need to add the :sameName if they are the same name
    }
    )
    

export default apiClient