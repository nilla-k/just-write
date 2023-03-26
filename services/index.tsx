import { request, gql } from 'graphql-request';
// Documentation for GraphQL Request: https://www.npmjs.com/package/graphql-request
// Bottom line is that this library will allows us to make GraphQL queries.

const graphqlAPI = process.env.NEXT_PUBLIC_GRAPHCMS_ENDPOINT;

// We're making a function and immediately exporting it.
/**
 * Initially, when first trying the request, you'll get a 403 Error: not allowed.
 * This is because you need to set up public API permisions in Hygraph/GraphCMS
 */
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

export const getRecentPosts = async () => {
  const query = gql`
    query getRecentPosts {
      posts(orderBy: createdAt_DESC, first: 3) {
        createdAt
        title
        slug
        headerImage {
          url
        }
      }
    }
  `;
  if (graphqlAPI === undefined) {
    throw new TypeError('Missing env variable for NEXT_PUBLIC_GRAPHCMS_ENDPOINT');
  } else {
    const result = await request(graphqlAPI, query);
    return result.posts;
  }
};

export const getSimilarPosts = async ({
  categories,
  slug,
}: {
  categories: [string];
  slug: string;
}) => {
  const query = gql`
    query MyQuery($categories: [String!], $slug: String!) {
      posts(where: { categories_some: { name_in: $categories }, slug_not: $slug }, last: 3) {
        slug
        title
        categories
        createdAt
        headerImage {
          url
        }
      }
    }
  `;

  if (graphqlAPI === undefined) {
    throw new TypeError('Missing env variable for NEXT_PUBLIC_GRAPHCMS_ENDPOINT');
  } else {
    const result = await request(graphqlAPI, query);
    return result.posts;
  }
};
