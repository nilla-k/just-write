import  { request, gql } from 'graphql-request';
// Documentation for GraphQL Request: https://www.npmjs.com/package/graphql-request 
// Bottom line is that this library will allows us to make GraphQL queries.

// We're making a function and immediately exporting it. 
export const getPosts = async () => {
    const query = gql`
    query MyQuery {
        postsConnection {
          edges {
            node {
              author {
                name
                id
              }
              createdAt
              slug
              title
              excerpt
              headerImage {
                url
              }
              categories {
                name
                slug
              }
            }
          }
        }
      }
    `
}