const path = require('path');

// dynamically create pages and call in components that make the page layout
exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions;
  const bookTemplate = path.resolve('src/templates/bookTemplate.js');
  return graphql(`
 {
        allBook {
          edges {
            node {
              id
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
        context: {bookId: book.node.id}
      })
    });
  })

  //  closes exports actions   

}
