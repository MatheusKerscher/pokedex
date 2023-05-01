import { NameAndUrl } from "../common/name-and-url.model";

export class Pokemon {
  abilities?: Abilities[];
  base_experience?: number;
  forms?: NameAndUrl[];
  game_indices?: GameIndices[];
  height?: number;
  held_items?: any[];
  id?: number;
  is_default?: boolean;
  location_area_encounters?: string;
  moves?: Moves[];
  name?: string;
  order?: number;
  past_types?: any[];
  species?: NameAndUrl;
  sprites?: Sprites;
  versions?: any;
  stats?: Stats[];
  types?: Types[];
  weight?: number;
}


export class Abilities {
  ability?: NameAndUrl;
  is_hidden?: boolean;
  slot?: number;
}

export class GameIndices {
  game_index?: number;
  version?: NameAndUrl;
}

export class Moves {
  move?: NameAndUrl;
  version_group_details?: MoveVersionGroupDetails[];
}

export class MoveVersionGroupDetails {
  level_learned_at?: number;
  move_learn_method?: NameAndUrl;
  version_group?: NameAndUrl;
}

export class Sprites {
  back_default?: string | null;
  back_female?: string | null;
  back_shiny?: string | null;
  back_shiny_female?: string | null;
  front_default?: string | null;
  front_female?: string | null;
  front_shiny?: string | null;
  front_shiny_female?: string | null;
  other?: OtherSprites;
}

export class OtherSprites {
  dream_world?: OtherSpritesDreamWorld;
  home?: OtherSpritesHome;
  'official-artwork'?: OtherSpritesOficcialArtwork;
}

export class OtherSpritesDreamWorld {
  front_default?: string | null;
  front_female?: string | null;
}
export class OtherSpritesHome {
  front_default?: string | null;
  front_female?: string | null;
  front_shiny?: string | null;
  front_shiny_female?: string | null;
}
export class OtherSpritesOficcialArtwork {
  front_default?: string | null;
  front_shiny?: string | null;
}

export class Stats {
  base_stat?: number;
  effort?: number;
  stat?: NameAndUrl;
}
export class Types {
  slot?: number;
  type?: NameAndUrl;
}
