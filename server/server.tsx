import { ApolloServer } from 'apollo-server';

import typeDefs from './type-defs';
import resolvers from './resolvers';

(async () => {
  const server = new ApolloServer({ typeDefs, resolvers });
  const { url } = await server.listen();
  console.log(`🚀 Server ready at ${url}`);
})();
