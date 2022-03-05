import {createContext, useState} from "react";

export const AppContext = createContext();

const AppContextProvider = ({children})=>{

    const getUserFromLS=()=>{
        let user = localStorage.getItem('user');
        if(user){
            return JSON.parse(user)
        }
    }

    const [user, _setUser]=useState(getUserFromLS());
    const [book, setBook]=useState({});
    

    const values={
        user,
        setUser:(user)=>{
            localStorage.setItem('user',JSON.stringify(user))
            _setUser(user)
        },
        book,
        setBook
       
    }

    return (
        <AppContext.Provider value={values}>
            {children}
        </AppContext.Provider>
    )

}

export default AppContextProvider