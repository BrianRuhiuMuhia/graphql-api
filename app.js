const dotenv = require("dotenv");
dotenv.config();
const typeDefs=require("./typeSchema.js")
const resolvers=require("./resolver.js")

const { ApolloServer } = require("apollo-server");

const server = new ApolloServer({ typeDefs, resolvers });

server.listen(5000).then(({ url }) => {
  console.log(`GraphQL API server listening on ${url}`);
});