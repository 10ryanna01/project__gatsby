import React from 'react';
import Layout from "../components/layout";
import BookItem from "../components/BookItem";

const BookTemplate = (props) => { 
    console.log(props.pageContext.title);
    return (
        <Layout>
           <BookItem
           bookCover={props.pageContext.localImage.childImageSharp.fixed}
           auhorName={props.pageContext.author.name}
           bookSummary={props.pageContext.summary}
           bookTitle={props.pageContext.title} /> 
 
        </Layout>

    )

}

export default BookTemplate;