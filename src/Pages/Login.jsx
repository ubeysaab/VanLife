import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useFormik } from 'formik'
import validationSchema from "../Schemas/shemas"
import {handleLogin} from '../api'
function Login() {
const navigate= useNavigate()
const [error,setError] =useState(null)
  const formik = useFormik(
    {
      //initial values = values when we use it down in form
      initialValues :{
        "email":"",
        "password":""
      },
      // after adding validation schema here our form is gonna know to use this schema and when we try to submit  the form it's will validate it and display any error if any of the fields didn't pass.
      validationSchema:validationSchema,



      //formik.handleSubmit is gonna call the code below
      //values are our form values 
      //actions are some functions provided by formik 
       onSubmit:  async (values,actions)=>{
        console.log('submitting')
        // console.log(values)
        // console.log(actions)
        //! because handle login is async this also should be async
         const data = await handleLogin(values)
         if(data.user){
          localStorage.setItem('user',JSON.stringify(data))
          navigate('/host')
         }else{
           setError(data.message)
         }
       
        
       }
    }
  )
  
  return (
    <main className='form-container'>
      <div>
      <h2 className='form-header'>Sign in to your account</h2>
      <form 

      onSubmit={formik.handleSubmit}
      >
        {/* <label for='email'>Email</label> */}
        <input type="email" 
        name="email" 
        id="email"
        className='form-input'
        value={formik.values.email}
        // in onChange instead of defining our function we gonna use formik.handleChange which come from formik and also know to take the one change event and set the formik state based on what ever value it's looking for 
        onChange={formik.handleChange}
        placeholder='Enter Your Email'
        // onBlur is validate : onblur event occurs when an object loses focus

        onBlur={formik.handleBlur}
        /> 
        {/* {formik.errors &&formik.touched.email && <span className='error-message'>{formik.errors.email}</span>} */}
        {/* <label for='password'> Password</label> */}
        <input type="password" 
        className='form-input'
        name="password" 
        id="password"
        value={formik.values.password}
        onChange={formik.handleChange}
        placeholder='Enter Your Password'
        onBlur={formik.handleBlur}
        /> 
          {/* {formik.errors&&formik.touched.password && <span className='error-message'>{formik.errors.password}</span>} */}
        
        {error && <span className='error-message'>{error}</span>}

        <button type="submit" className='btn--simple form-btn'>Submit</button>
      </form>
      </div>
    </main>
  )
}

export default Login

// formik is just control form states it doesn't validate any thing 

// so we need to use YUP which is validaiton library which is really works well with formik it's actually built in to formik to use that library in order to use it we need to create a Schema for our form and our schema basically is gonna define these {initial values properties } and it's gonna basically say what those properties types should be 