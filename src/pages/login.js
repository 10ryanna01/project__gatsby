import React, {useState} from "react"
import { Link } from "gatsby"
import styled from 'styled-components';
import Layout from "../components/layout"
import SEO from "../components/seo"
import {useAuth} from "../components/Firebase"; 


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


const SecondPage = () => {
    const [formValues, setFormValues] = useState({email: '', password: '' });
    const {firebase} = useAuth();

    function handleSubmit(e){ 
        e.preventDefault();
        firebase.login({email: formValues.email, password: formValues.password});
    }

    function handleInputChange(e){
        e.persist();
        setFormValues(currentValues => ({
        ...currentValues,
        [e.target.name]: e.target.value
            
    }))
}

 
  return(
  <Layout> 
 
    <form onSubmit ={handleSubmit}>
        <input value={formValues.email} name="email" onChange={handleInputChange} placeholder="email" />
        <input value={formValues.password} name="password" onChange={handleInputChange} placeholder="password" type="password" /> 
    <button type="submit">login</button> 

    </form>
     
  </Layout>
); 

}

export default SecondPage
