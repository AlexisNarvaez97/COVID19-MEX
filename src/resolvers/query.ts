import { IResolvers } from "graphql-tools";
import {
  getCases
} from "../lib/database-operations";

const query: IResolvers = {
  Query: {
    async cases(_: void, __: any, { db }): Promise<any> {
      return await getCases(db);
    }
  }
};

export default query;
