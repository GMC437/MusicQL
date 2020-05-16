import { gql } from "apollo-server";

const artistType = gql`
  type Artist {
    name: String
    year: String
    genre: String
    country: String
  }
`;

export { artistType };
