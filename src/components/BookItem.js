import React from "react";
import styled from 'styled-components';
import Img from 'gatsby-image'



const BookItemImageWrapper = styled.div`
    max-width: 200px;

    img{
        max-width: 200px;
    }
`;

const BookItemContentWrapper = styled.div`
        flex-grow: 1;
        padding-left: 1.0rem;
`;


const BookItemWrapper = styled.section`
// section styled component used as a wrapper selector 
// theme
// ------ #ECFFFF, aqua
// ------ #69695F, muted green
// ------ #F25B6A, red
// ------ #F8A1D8, pink
// ------ #010005  dark


    display: flex;
    border: 5px solid #010005;    
    background: #69695F;
    padding: 8px;
    color: #ECFFFF;
    margin-bottom: 8px;
    h2{
        color: #F25B6A;

        small{
            font-size: 14px;
            color: #ECFFFF;
            padding-left: 8px;
        }
    }
`;

const BookItem = ({ authorName, bookTitle, bookSummary, bookCover, children }) => {
    return (



        <BookItemWrapper>
            <BookItemImageWrapper>
                <Img fixed={bookCover} />
            </BookItemImageWrapper>
            <BookItemContentWrapper>
                <h2>{bookTitle}
                    <small>{authorName}</small></h2>
                <p>{bookSummary}</p>
                <div>
                    {children}
                </div>
            </BookItemContentWrapper>
        </BookItemWrapper>



    )

}

export default BookItem;