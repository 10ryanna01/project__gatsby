import styled from 'styled-components'

export const Button = styled.button`

    border: 1px solid #010005;
    background: #010005;
    border-radius: 8px;
    color: #ECFFFF;
    text-transform: capitalize;
    padding: 0.5rem 1.0rem;
    min-width: 165px;
    text-decoration: none;
    margin-bottom: 1.0rem; 
    outline:0;
    box-shadow: none;
    cursor: pointer;

    // push button to expand to width of its container, else default to min content fill width above
    ${props => props.block ? 'display: block; width: 100%;' : '' }
    
    &:hover{
      background: #F25B6A;
      border: 1px solid #F25B6A;
    }



`;