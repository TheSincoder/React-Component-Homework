
import {useEffect, useState, useContext} from 'react'
import {deleteUser} from '../api/apiUser';
import {CancelToken} from 'apisauce'

export default function useUser() {
  const [user, setUser] = useState([])
  
  const source = CancelToken.source();

    useEffect(()=>{
        user ? 
        (async()=>{
            const response = await editUser(user, source.token);
            setUser(response);
        })()
        :
        (async()=>{
            const response = await getUser(source.token);
            setUser(response);
        })()
        return ()=>{source.cancel()}
    },[user]
  )

  return user
}