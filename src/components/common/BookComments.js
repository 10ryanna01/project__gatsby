import React, {useEffect, useState} from "react";
import styled from 'styled-components'
import {Button} from './Button';
import {Input} from './Input';

export const BookComments = ({firebase, bookId}) => {
    
  
const CommentListItem = styled.div`


// section styled component used as a wrapper selector 
// theme
// ------ #ECFFFF, aqua
// ------ #69695F, muted green
// ------ #F25B6A, red
// ------ #F8A1D8, pink
// ------ #010005  dark


    display: block;
    border: 11px solid #010005;
    border-radius: 4px;
    padding:0.5rem;

`; 


const CommentForm = styled.div`

display: flex;
margin-top: 1.0rem;
margin-bottom: 1.0rem; 

${Button}{
    margin-left: 30px;
}

`;



const CommentListItemAuthor = styled.h3`
    
    color: #F25B6A;
    font-weight: 700;
    letter-spacing: 1px;
    font-size: 0.8rem;
    text-transform: capitalize;
    margin-bottom: 0.5rem;

 `;


 const CommentListItemText = styled.h3`
    color: #010005;
    font-weight: 400;
    font-size: 0.8rem;
 
 `;

 const CommentListTitle = styled.h2`
 
 text-align: left;
 font-size: 1.1rem; 
 letter-spacing: 1px;
 color: #F8A1D8; 
 
 `;


 

    console.log(bookId);

    return (
        <div>

        <CommentForm>
            <Input/>
            <Button>post comment</Button>
        </CommentForm>

        <CommentListItem>
            
            <CommentListTitle>Comments</CommentListTitle>
                <CommentListItemAuthor>
                    comment author
                </CommentListItemAuthor>
                <CommentListItemText>            
                    this is a test coment
                </CommentListItemText>  
            </CommentListItem>
        </div>

    )

};
