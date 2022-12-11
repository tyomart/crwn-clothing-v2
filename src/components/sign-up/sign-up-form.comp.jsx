import { useState} from "react"
import FormInput from "../form-input/form-input.comp"

import {createAuthUserWithEmailAndPassword, createUserDocumentFromAuth} from '../../utils/firebase.utils'
import './sign-up-form.styles.scss'
import Button from "../button/button.comp"
//import { UserContext } from "../../contexts/user.context"

const defaultFormFields = {

    displayName: '',
    email: '',
    password: '',
    confirmPassword: ''

}


const SignUpForm = () => {

    const [formFields, setFormFields] = useState(defaultFormFields);
    const { displayName, email, password, confirmPassword } = formFields;
    //const { setCurrentUser } = useContext(UserContext);

    // console.log('formFields', formFields)

    const resetFormFields = () => {
        setFormFields(defaultFormFields)
    }

    const handleSubmit =  async (event) => {
        event.preventDefault()

        if(password !== confirmPassword)  {
            alert('passs not matched');
            return;
        }
        try {
            const { user } = await createAuthUserWithEmailAndPassword(
                email, 
                password
                );
          
            await createUserDocumentFromAuth(user, { displayName });
            resetFormFields(); 
            // setCurrentUser(user);

        } 
        catch (error) { 
            if (error.code === 'auth/email-already-in-use') {
                alert('cannot create user, email already in use')} 
                else {
                    console.log('user creation encountered an error', error);
                }

        }
    };

    const handleChange = (event) => {
        const { name, value } = event.target; 

        setFormFields({ ...formFields, [name]: value})
    }

    

    return (
        <div>
            <h1>SIgn Up with Email and Pass</h1>
            <form onSubmit ={handleSubmit}>

            <FormInput 
            label='Display Name'
            type='text' 
            required
            onChange={handleChange}
            name='displayName' 
            value={displayName}
            />
             <FormInput label='Email'
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
            <FormInput label='Confirm Passw'
            type='password' 
            required
            onChange={handleChange} 
            name='confirmPassword'
            value={confirmPassword}
            />
            
            <Button buttonType='google' type='submit'>submit</Button>
            
  
            </form>
        </div>
    )
}

export default SignUpForm