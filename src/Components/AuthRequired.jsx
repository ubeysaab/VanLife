import React, { useEffect, useState } from 'react'
import { Navigate, Outlet,useLocation } from 'react-router-dom'

function AuthRequired() {
const [user,setUser] = useState(JSON.parse(localStorage.getItem("user")))
  const location = useLocation()

  if(user?.token){
   return <Outlet/>
  }
 return  <Navigate
  to={'/login'}
  state={{previousPath:location.pathname}}
  />
}

export default AuthRequired