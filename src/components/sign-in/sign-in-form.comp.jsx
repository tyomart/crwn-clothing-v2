import { useState } from "react"
import FormInput from "../form-input/form-input.comp"
import Button from "../button/button.comp"
//import { UserContext } from "../../contexts/user.context"

import {
    signInWithGooglePopup, 
    createUserDocumentFromAuth,  
    SignInAuthUserWithEmailAndPassword
} from '../../utils/firebase.utils'

import './sign-in-form.styles.scss'

const defaultFormFields = {

    email: '',
    password: ''

}

const SignInForm = () => {

    const [formFields, setFormFields] = useState(defaultFormFields);
    const { email, password } = formFields;

    //const { setCurrentUser } = useContext(UserContext);

    const resetFormFields = () => {
        setFormFields(defaultFormFields)
    };
    const signInWithGoogle = async () => {
        await signInWithGooglePopup();
        // setCurrentUser(user);

    
    };
    const handleSubmit =  async (event) => {
        event.preventDefault()      
        
        try {   
            const { user } = await SignInAuthUserWithEmailAndPassword(email, password)  ;
            // console.log(response, 'response')         
            resetFormFields();
            //setCurrentUser(user); 
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
        <div>
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
           
            <div className="buttons-container">
            <Button buttonType='google' type='submit'>Sign In</Button>
            <Button type ='button' onClick={signInWithGoogle}>Google Sign</Button>
            </div>
  
            </form>
        </div>
    )
}


export default SignInForm;