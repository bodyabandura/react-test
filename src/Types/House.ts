type head = {
  id: string,
  firstName: string,
  lastName: string,
};

type trait = {
  id: string,
  name: string,
};

export interface House {
  id: string,
  name: string,
  houseColours: string,
  founder: string,
  animal: string,
  element: string,
  ghost: string,
  commonRoom: string,
  heads: head[],
  traits: trait[],
};
