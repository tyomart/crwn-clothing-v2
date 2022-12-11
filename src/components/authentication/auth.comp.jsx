
import SignUpForm from '../sign-up/sign-up-form.comp';
import SignInForm from '../sign-in/sign-in-form.comp';
import './auth.styles.scss'

const Authent = () => {  
 return (
 <div className='authentication-container'>
<SignInForm />
 <SignUpForm /> 
 </div>
 )
}

export default Authent;