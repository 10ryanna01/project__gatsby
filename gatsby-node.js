const path = require('path');

// dynamically create pages and call in components that make the page layout
exports.createPages = ({ graphql, actions }) => {
    const { createPage } = actions;
    const bookTemplate = path.resolve('src/templates/bookTemplate.js');
    return graphql(`
    query MyQuery {
        allBook {
          edges {
            node {
              summary
              title
              localImage {
                childImageSharp{
                  fixed(width: 200){
                    src
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
      
      
     
     
     `).then((result) => {
        if (result.errors) {
            throw result.errors;
        }
        //complete promise
        // create page action for each book
        result.data.allBook.edges.forEach(book => {
            createPage({
                // create a new page, with path set using string interpolation of the book name in books category
                path: `/book/${book.node.id}`,
                component: bookTemplate,
                context: book.node
            })
        });
    })

    //  closes exports actions   

}
