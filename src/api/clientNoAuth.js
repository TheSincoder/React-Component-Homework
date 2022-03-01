import {create} from "apisauce"; // npm install apisauce
const apiClient = (cancelToken) => create(
    {
        baseURL: "https://cae-bootstore.herokuapp.com/",
        cancelToken //:cancelToken //you don't need to add the :sameName if they are the same name
    }
)

export default apiClient