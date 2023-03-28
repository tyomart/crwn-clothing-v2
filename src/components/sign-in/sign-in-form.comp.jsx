import { useState } from "react"
import FormInput from "../form-input/form-input.comp"
import { BUTTON_TYPE_CLASSES } from '../button/button.comp';
import Button from "../button/button.comp";
//import { UserContext } from "../../contexts/user.context"

import {
    signInWithGooglePopup, 
    createUserDocumentFromAuth,  
    SignInAuthUserWithEmailAndPassword
} from '../../utils/firebase.utils'
import { useDispatch } from "react-redux";

import { googleSignInStart, emailSignInStart } from "../store/user/user.action";

import { SignInContainer, ButtonsContainer } from './sign-in-form.styles.jsx'

const defaultFormFields = {

    email: '',
    password: ''

}

const SignInForm = () => {
    const dispatch = useDispatch()
    const [formFields, setFormFields] = useState(defaultFormFields);
    const { email, password } = formFields;

    //const { setCurrentUser } = useContext(UserContext);

    const resetFormFields = () => {
        setFormFields(defaultFormFields)
    };

    const signInWithGoogle = async () => {
        dispatch(googleSignInStart())
      
    

    
    };
    const handleSubmit =  async (event) => {
        event.preventDefault()      
        
        try {   
            dispatch(emailSignInStart(email, password))  ;
                    
            resetFormFields();
            
        } 
        catch (error) { 
            switch (error.code) {
                case 'auth/wrong-password':
                alert('incorrect pass/email')
                break;
                case 'auth/user-not-found':
                alert('no such user')
                break;
            default:
                console.log(error);
            }
        }
    };

    const handleChange = (event) => {
        const { name, value } = event.target; 

        setFormFields({ ...formFields, [name]: value })
    };
    

    

    return (
        <SignInContainer>
            <h1>Already have account?</h1>

            <span>Sign In with em/passw</span>
            
            <form onSubmit={handleSubmit}>

        
             <FormInput 
             label='Email'
             type='email'
            required 
            onChange={handleChange}
            name='email' 
            value={email}
            />

           <FormInput label='Passw'
            type='password' 
            required 
            onChange={handleChange} 
            name='password' 
            value={password}
            /> 
           
             <ButtonsContainer>
                <Button type='submit'>Sign In</Button>
                <Button buttonType={BUTTON_TYPE_CLASSES.google} type='button' 
                        onClick={signInWithGoogle}>Google Sign</Button>
            </ButtonsContainer> 
  
            </form>
        </SignInContainer>
    )
}


export default SignInForm;