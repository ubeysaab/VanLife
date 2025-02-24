// to create a schema we first neet to import YUP



import * as yup from 'yup';


const passwordRules = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/

const basicShema = yup.object(
//  this schema is gonna be equal to an object that we defined with shape
// inside we put the different values that we want to validate for 
  {
    email:yup.string().email("Please Enter a valid E-mail").required(),
    password:yup.string().min(4,"please create a stronger password ").required()


    // confirmPassword : yp.string().oneof([yep.ref("password"),null],'Passwords must match')
  }
)

export default basicShema