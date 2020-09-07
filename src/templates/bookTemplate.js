import React from 'react';
 
import BookItem from "../components/BookItem";
import {graphql} from 'gatsby';


const BookTemplate = (props) => { 

    console.log(props.data);
    return (
        <section>
           <BookItem
                bookCover={props.data.book.localImage.childImageSharp.fixed}
                auhorName={props.data.book.author.name}
                bookSummary={props.data.book.summary}
                bookTitle={props.data.book.title} /> 
 
        </section>

    )

}
 
export const query = graphql`

    query BookQuery($bookId: String!){
        book(id: {eq:$bookId}){
            summary
            title
            localImage {
              childImageSharp{
                fixed(width: 200){
                  ...GatsbyImageSharpFixed
                }
              }
            }
            id
            author {
              name
            }
        } 
    } 
`;



export default BookTemplate;