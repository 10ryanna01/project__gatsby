import React, {useEffect, useState} from "react";
import styled from 'styled-components'

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
    border: 11px solid #69695F;
    border-radius: 4px;
    padding:0.5rem;

`; 


const CommentListItemAuthor = styled.h3`
    
    color: #F25B6A;
    font-weight: 700;
    letter-spacing: 1px;
    font-size: 0.8rem;
    text-transform: capitalize;

 `;


 const CommentListItemText = styled.h3`
    color: #010005;
    font-weight: 400;
    font-size: 0.8rem;
 
 `;


 

    console.log(bookId);

    return (
        <div>

        <CommentListItem>
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
