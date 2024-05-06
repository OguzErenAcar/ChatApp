import React from 'react'
import { useUser } from '../Context/LoginContext'
import {Navigate} from "react-router-dom"

function PrivateRoute({children}) {
  const user=sessionStorage.getItem("userInfo")
  if(user)
    return children
  
  return <Navigate to="/"/>
}

export default PrivateRoute
