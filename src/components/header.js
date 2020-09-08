import { Link, navigate } from "gatsby"
import PropTypes from "prop-types"
import React, { useContext } from "react"
import { FirebaseContext } from './Firebase';
import styled from 'styled-components';

const LogoutLink = styled.span` 
    &:hover{ text-decoration: underline; }

`;
const LoginLink = styled.div`
text-transform: capitalize;
&:hover{ text-decoration: underline; }

* { text-transform: capitalize ;}
 
`;
const UserInfo = styled.div`
 
  div  {  text-transform: capitalize;}
`;


const Divider = styled.span`

margin: 0 8px;
padding-right: 1px;
background: #F8A1D8; 
 

`;

const LoginWrapper = styled.div` 
 
 color: #ECFFFF; 
 
> span {
  margin: auto 0;
  text-transform: capitalize;
  color: #F8A1D8 !important;
  cursor: pointer;
  display: block;
  text-align: right; 
  &: hover{    color: #F25B6A; }

}

`;


const HeaderWrapper = styled.header`
 
  background: #010005;
  margin-bottom: 1.45rem;    
 
`;


const HeaderContent = styled.section`

  margin: 0 auto;
  max-width: 960px;
  padding: 1.45rem 1.0875rem;
  display: flex;
  
  
  h1 { flex-grow: 1;  
   a { color: #F8A1D8; text-decoration: none;   
    &: hover{    color: #F25B6A; }
  } 
}


.links__loginlogout { 
  color: #ECFFFF;
  margin: auto 0;    
  text-align: right; 
  text-transform: capitalize;

  a, span, span a { text-transform: capitalize; color: #F8A1D8; #hover: #F25B6A;}
      &: hover{ text-decoration: underline; }
    
}

//end header wrapp

`;

const Header = ({ siteTitle }) => {
  const { firebase, user } = useContext(FirebaseContext)
  console.log(firebase, user);


  // calls in firebasecontext as decalred above
  function handelLogoutClick() {
    firebase.logout().then(() => navigate('/login'))
  }

  return (
    <HeaderWrapper> 
      <HeaderContent>
        <h1>
          <Link to="/">
            {siteTitle}
          </Link>
        </h1>
        <UserInfo>
          {!!user && !!user.email &&
            <LoginWrapper>
              hello, {user.email} 
                <LogoutLink onClick={handelLogoutClick} className="links__loginlogout">
                  logout
                </LogoutLink>
             
            </LoginWrapper>

          }
        </UserInfo>

        {(!user || !user.email) &&
          <LoginLink className="links__loginlogout">
              <Link to="/login">
                login
              </Link>
          <Divider /> 
              <Link to="/register">
                register
              </Link>
          </LoginLink>

        } 
      </HeaderContent>
    </HeaderWrapper>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
