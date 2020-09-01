import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = (props) => {
  console.log(props);
  return (
  <Layout>
  
  </Layout>
  );
}

export const query = graphql` 
{
  allBook {
    edges {
      node {
        summer
        title
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
