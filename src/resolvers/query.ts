import { IResolvers } from "graphql-tools";
import {
  getCases, getSospechosos, getMuertos
} from "../lib/database-operations";

const query: IResolvers = {
  Query: {
    async confirmados(_: void, __: any, { db }): Promise<any> {
      return await getCases(db);
    },
    async sospechosos(_: void, __: any, { db }): Promise<any> {
      return await getSospechosos(db);
    },
    async muertos(_: void, __: any, { db }): Promise<any> {
      return await getMuertos(db);
    }
  }
};

export default query;
