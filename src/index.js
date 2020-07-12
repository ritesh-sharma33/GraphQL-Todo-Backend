import { GraphQLServer, PubSub } from "graphql-yoga";

import db from "./db";
import Query from "./resolvers/Query";
import User from "./resolvers/User";
import Todo from "./resolvers/Todo";
import Mutation from "./resolvers/Mutation";
import Subscription from "./resolvers/Subscription";

const pubsub = new PubSub();

// Server
const server = new GraphQLServer({
  typeDefs: "./src/schema.graphql",
  resolvers: {
    Query,
    User,
    Todo,
    Mutation,
    Subscription,
  },
  context: {
    db,
    pubsub,
  },
});

server.start(() => {
  console.log("The server is started");
});
