import express from "express";
import compression from "compression";
import cors from "cors";
import schema from "./schema";
import { ApolloServer } from "apollo-server-express";
import { createServer } from "http";
import enviroments from "./config/environment";
import Database from "./config/database";
import expressPlayground from 'graphql-playground-middleware-express';

if (process.env.NODE_EV !== "production") {
  const envs = enviroments;
  console.log(envs);
}

async function init() {
  const app = express();

  app.use("*", cors());

  app.use(compression());

  const database = new Database();
  const db = await database.init();

  const context: any = async ({ req, connection }: any) => {
    return { db };
  };

  const server = new ApolloServer({
    schema,
    context,
    introspection: true
  });

  server.applyMiddleware({ app });

  app.use('/', expressPlayground({
    endpoint: '/graphql'
  }));

  const PORT = process.env.PORT || 5300;
  const httpServer = createServer(app);
  httpServer.listen(
    { port: PORT }, 
    () => {
      console.log('========================SERVER==============');
      console.log(`COVID19 http://localhost:${PORT}${server.graphqlPath}`);
    }
  );
}

init();
