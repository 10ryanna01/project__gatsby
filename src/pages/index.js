import React from "react"
import { Link, graphql } from "gatsby"

 
import Image from "../components/image"
import SEO from "../components/seo"
import BookItem from "../components/BookItem";
import styled from "styled-components"


const LinkButton = styled.div`
// theme
// ------ #ECFFFF, aqua
// ------ #69695F, muted green
// ------ #F25B6A, red
// ------ #F8A1D8, pink
// ------ #010005  dark

text-align: right;
margin-bottom: 10px;
padding-right: 8px;
  a {
    background: #010005;
    border-radius: 8px;
    color: #ECFFFF;
    padding: 10px;
    text-decoration: none;
    
    &:hover{
      background: #F25B6A

    }
    
  }
`

const IndexPage = (props) => {
 
  return (
    <section>

      {props.data.allBook.edges.map(edge => ( 
        <BookItem
          bookCover={edge.node.localImage.childImageSharp.fixed}
          bookTitle={edge.node.title}
          bookSummary={edge.node.summary}
          authorName={edge.node.author.name}
          key={edge.node.id}>

          <LinkButton>
          <Link to={`/book/${edge.node.id}`}>
            join conversation
          </Link>
          </LinkButton>
        </BookItem>
      ))} 
    </section>
  );
}

export const query = graphql` 
query MyQuery {
  allBook {
    edges {
      node {
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
  }
}


`;

export default IndexPage
