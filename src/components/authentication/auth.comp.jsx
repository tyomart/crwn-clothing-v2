
import SignUpForm from '../sign-up/sign-up-form.comp';
import SignInForm from '../sign-in/sign-in-form.comp';
import { AuthContainer } from './auth.styles.jsx'

const Authent = () => {  
 return (
 <AuthContainer>
        <SignInForm />
        <SignUpForm /> 
 </AuthContainer>
 )
}

export default Authent;