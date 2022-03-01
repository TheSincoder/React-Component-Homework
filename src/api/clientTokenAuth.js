import {create} from "apisauce";


const apiClient = (token, cancelToken) => create(
    {
        baseURL: "https://cae-bootstore.herokuapp.com/",
        headers:{
            Authorization: "Bearer "+ token //npm install base-64
        },
        cancelToken //:cancelToken //you don't need to add the :sameName if they are the same name
    }
    )
    

export default apiClient