import { NameAndUrl } from "../common/name-and-url.model";

export class PokemonNames {
  count?: number;
  next?: string | null;
  previous?: string | null;
  results?: NameAndUrl[];
}
