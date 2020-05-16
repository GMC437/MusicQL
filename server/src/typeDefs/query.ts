import { gql } from "apollo-server";

const query = gql`
  type Query {
    artists: [Artist]
  }
`;

export { query };
