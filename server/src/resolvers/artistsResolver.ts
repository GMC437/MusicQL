import { Artist } from "../models";

const artistsResolver = {
  Query: {
    artists: () => Artist.all(),
  },
};

export { artistsResolver };
