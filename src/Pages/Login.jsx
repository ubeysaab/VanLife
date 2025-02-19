import React from 'react'
import { useFormik } from 'formik'
function Login() {


  const formik = useFormik(
    {
      //initial values = values when we use it down in form
      initialValues :{
        "email":"",
        "password":""
      }
    }
  )
  console.log(formik)
  return (
    <div>
      <form autoComplete='off'>
        <label for='email'>Email</label>
        <input type="email" 
        name="email" 
        id="email"
        value={formik.values.email}
        // in onChange instead of defining our function we gonna use formik.handleChange which come from formik and also know to take the one change event and set the formik state based on what ever value it's looking for 
        onChange={formik.handleChange}
        placeholder='Enter Your Email'
        // onBlur is validate : onblur event occurs when an object loses focus

        onBlur={formik.handleBlur}
        /> 
        <label for='password'> Password</label>
        <input type="password" 
        name="password" 
        id="password"
        value={formik.values.password}
        onChange={formik.handleChange}
        placeholder='Enter Your Password'
        onBlur={formik.handleBlur}
        /> 
        


        <button type="submit">Submit</button>
      </form>
    </div>
  )
}

export default Login