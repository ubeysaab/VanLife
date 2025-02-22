import React, { useEffect, useState } from 'react'
import { Navigate, Outlet } from 'react-router-dom'

function AuthRequired() {
const [user,setUser] = useState(JSON.parse(localStorage.getItem("user")))

  console.log(user)
  if(user?.token){
    console.log("banana")
   return <Outlet/>
  }
 return  <Navigate
  to={'/login'}/>
}

export default AuthRequired