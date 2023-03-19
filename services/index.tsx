import { request, gql } from 'graphql-request';
// Documentation for GraphQL Request: https://www.npmjs.com/package/graphql-request
// Bottom line is that this library will allows us to make GraphQL queries.

const graphqlAPI = process.env.NEXT_PUBLIC_GRAPHCMS_ENDPOINT;

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
  `;
  if (graphqlAPI === undefined) {
    throw new TypeError('Missing env variable for NEXT_PUBLIC_GRAPHCMS_ENDPOINT');
  } else {
    const result = await request(graphqlAPI, query);
    return result.postsConnection.edges;
  }
};

/**
 * Initially, when first trying the request, you'll get a 403 Error: not allowed.
 * This is because you need to set up public API permisions in Hygraph/GraphCMS
 */
