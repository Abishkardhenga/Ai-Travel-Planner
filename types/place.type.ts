type Feature = {
  type: "Feature";
  geometry: Geometry;
  properties: Properties;
  bbox: [number, number, number, number];
};

type Geometry = {
  type: "Point";
  coordinates: [number, number];
};

type Properties = {
  id: string;
  gid: string;
  layer: string;
  source: string;
  source_id: string;
  country_code: string;
  name: string;
  accuracy: string;
  country: string;
  country_gid: string;
  country_a: string;
  continent: string;
  continent_gid: string;
  label: string;
  addendum: Addendum;
};

type Addendum = {
  concordances: Concordances;
};

type Concordances = {
  "dbp:id": string;
  "digitalenvoy:country_code": number;
  "fb:id": string;
  "fifa:id": string;
  "fips:code": string;
  "gaul:id": string;
  "gn:id": number;
  "gp:id": number;
  "hasc:id": string;
  "icao:code": string;
  "ioc:id": string;
  "itu:id": string;
  "loc:id": string;
  "m49:code": string;
  "marc:id": string;
  "mzb:id": string;
  "ne:adm0_a3": string;
  "ne:id": number;
  "nyt:id": string;
  "qs_pg:id": number;
  "uncrt:id": string;
  "wd:id": string;
  "wk:page": string;
  "wmo:id": string;
};