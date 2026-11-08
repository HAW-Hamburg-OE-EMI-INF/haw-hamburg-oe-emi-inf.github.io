import type { StudiengangEntry, StudiengangId, StudiengangPageId } from "../types/types";
import { faculties } from "./faculty";

export const studiengaenge = {
  ET: {
    name: "Elektrotechnik und Informationstechnik",
    short: "ET",
    degree: "B.Sc.",
    faculty: faculties.EMI,
    details: {
      entryId: "et",
      base: "/studiengang",
    },
  },
  IE: {
    name: "Information Engineering",
    short: "IE",
    degree: "B.Sc.",
    faculty: faculties.EMI,
    details: {
      entryId: "ie",
      base: "/studiengang",
    },
  },
  MT: {
    name: "Medientechnik",
    short: "MT",
    degree: "B.Sc.",
    faculty: faculties.EMI,
    details: {
      entryId: "mt",
      base: "/studiengang",
    },
  },
  REE: {
    name: "Regenerative Energiesysteme und Energiemanagement",
    short: "REE",
    degree: "B.Sc.",
    faculty: faculties.EMI,
    details: {
      entryId: "ree",
      base: "/studiengang",
    },
  },
  AI: {
    name: "Angewandte Informatik",
    short: "AI",
    degree: "B.Sc.",
    faculty: faculties.INF,
    details: {
      entryId: "ai",
      base: "/studiengang",
    },
  },
  ITS: {
    name: "Informatik Technischer Systeme",
    short: "ITS",
    degree: "B.Sc.",
    faculty: faculties.INF,
    details: {
      entryId: "its-ecs",
      base: "/studiengang",
    },
  },
  ECS: {
    name: "European Computer Science",
    short: "ECS",
    degree: "B.Sc.",
    faculty: faculties.INF,
    details: {
      entryId: "its-ecs",
      base: "/studiengang",
    },
  },
  WI: {
    name: "Wirtschaftsinformatik",
    short: "WI",
    degree: "B.Sc.",
    faculty: faculties.INF,
    details: {
      entryId: "wi",
      base: "/studiengang",
    },
  },
  MI: {
    name: "Medieninformatik",
    short: "MI",
    degree: "B.Sc.",
    faculty: faculties.INF,
    details: {
      entryId: "mi",
      base: "/studiengang",
    },
  },
  BIM: {
    name: "Bibliotheks- und Informationsmanagement",
    short: "BIM",
    degree: "B.A.",
    faculty: faculties.INF,
    details: {
      entryId: "bim",
      base: "/studiengang",
    },
  },
  "M-INF": {
    name: "Master Informatik",
    short: "M-INF",
    degree: "M.Sc.",
    faculty: faculties.INF,
    details: {
      entryId: "m-inf",
      base: "/studiengang",
    },
  },
} satisfies Record<StudiengangId, StudiengangEntry>;

export const studiengaengeEMI: StudiengangEntry[] = [
  studiengaenge.ET,
  studiengaenge.IE,
  studiengaenge.MT,
  studiengaenge.REE,
];

export const studiengaengeINF: StudiengangEntry[] = [
  studiengaenge.AI,
  studiengaenge.ITS,
  studiengaenge.ECS,
  studiengaenge.WI,
  studiengaenge.MI,
  studiengaenge.BIM,
  studiengaenge["M-INF"],
];

export const studiengaengeByPage: Record<
  StudiengangPageId,
  [StudiengangEntry] | [StudiengangEntry, StudiengangEntry]
> = {
  et: [studiengaenge.ET],
  ie: [studiengaenge.IE],
  mt: [studiengaenge.MT],
  ree: [studiengaenge.REE],
  ai: [studiengaenge.AI],
  "its-ecs": [studiengaenge.ITS, studiengaenge.ECS],
  wi: [studiengaenge.WI],
  bim: [studiengaenge.BIM],
  mi: [studiengaenge.MI],
  "m-inf": [studiengaenge["M-INF"]],
};

export type StudiengangByPageValue = (typeof studiengaengeByPage)[StudiengangPageId];
