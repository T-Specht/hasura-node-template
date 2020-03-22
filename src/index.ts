import { GraphQLServer } from "graphql-yoga";
import { resolvers, typeDefs } from "./graphql";

const PORT = process.env.PORT || "4000";

export const server = new GraphQLServer({
  resolvers,
  typeDefs,
  context: () => {}
});

export const app = server.express;


server.start(
  {
    port: parseInt(PORT)
  },
  () => {
    console.log(`Server is listening on port ${PORT}.`);
  }
);
