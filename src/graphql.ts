import gql from "gql-tag";

export const typeDefs = gql`
  type Mutation {
    login(user: String!, password: String!): String!
  }
`;

export const resolvers = {
  Mutation: {
    login: (
      _: any,
      { user, password }: { user: string; password: string },
      ctx: any
    ) => {
      return "Login Request!";
    }
  }
};
