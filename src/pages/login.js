import React, {useState, useContext} from "react"
import {FirebaseContext} from "../components/Firebase"; 
import { Link } from "gatsby"
import styled from 'styled-components';
import {Form, Button, Input, ErrorMessage} from '../components/common';
import SEO from "../components/seo"



const Gt__LoginWrapper = styled.section`
// section styled component used as a wrapper selector 
// theme
// ------ #ECFFFF, aqua
// ------ #69695F, muted green
// ------ #F25B6A, red
// ------ #F8A1D8, pink
// ------ #010005  dark 

button {
 
    background: none;
    outline: 0;
    padding: 20px;
    border-radius: 10px;
    background-color: #010005;
    min-width: 100px;
    color: #ECFFFF;
    cursor: pointer;

    &:hover{
        background: none;
        background-color: #F25B6A;
    } 
} 

`;


const Login = () => {
    const [formValues, setFormValues] = useState({email: '', password: '' });
    const {firebase} = useContext(FirebaseContext); 
    const [errorMessage, SetErrorMessage] = useState('');

    function handleSubmit(e){ 
        e.preventDefault();
        firebase.login({email: formValues.email, password: formValues.password}).catch(error =>{
            console.log(error);
            SetErrorMessage(error.message);
        });
    }

    function handleInputChange(e){
        e.persist();
        SetErrorMessage('');
        setFormValues(currentValues => ({
        ...currentValues,
        [e.target.name]: e.target.value
            
    }))
}

 
  return(
  <section> 
 
    <Form onSubmit ={handleSubmit}>
        <Input required  value={formValues.email} name="email" onChange={handleInputChange} placeholder="email" />
        <Input required value={formValues.password} name="password" onChange={handleInputChange} placeholder="password" type="password" /> 
        {!!errorMessage &&
            <ErrorMessage>
                {errorMessage}
            </ErrorMessage>
         }
    <Button type="submit" block>login</Button> 

    </Form>
     
  </section>
); 

}

export default Login
