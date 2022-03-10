import apiClientNoAuth from './clientNoAuth'


const endpoint = '/book'
//get all books
 export const getBooks = async (cancelToken) =>{
    let error;
    let books;

    const response = await apiClientNoAuth(cancelToken).get(endpoint);
    
    if (response.ok){
        books=response.data.books
    }else{
        error='An Unexpected Error has Occured. Please Try Again'
    };
    
    
    return{
        error,
        books
        
    };

};

//Get One Book
export const getBook = async (id, cancelToken)=>{
    let error;
    let book;

    const response = await apiClientNoAuth(cancelToken).get(endpoint+'/'+id);
    if (response.ok){
        book=response.data
    }else{
        error = 'An Unexpected Error has Occured. Please Try Again'
    }    
    return{
        error,
        book,
    }
}

