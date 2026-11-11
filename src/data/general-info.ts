import type { OeInfoCardData } from "../types/types";
import { studiengaenge } from "./studiengaenge";

export const oeInfoCardDataEMI: OeInfoCardData = {
  studiengaenge: [studiengaenge.ET, studiengaenge.IE, studiengaenge.MT, studiengaenge.REE],
  startDate: "05.10.2026",
  endDate: "08.10.2026",
  startEvent: {
    date: "05.10.2026",
    time: "9:30 Uhr",
    building: "Berliner Tor 21",
    buildingShort: "BT21",
    room: "der Aula",
    mapsUrl: "https://maps.app.goo.gl/aEXW4oQkYzA13sATA",
  },
  contactEmail: "oe-emi@haw-hamburg.de",
};

export const oeInfoCardDataINF: OeInfoCardData = {
  studiengaenge: [
    studiengaenge.AI,
    studiengaenge.WI,
    studiengaenge.ITS,
    studiengaenge.ECS,
    studiengaenge.MI,
    studiengaenge.BIM,
  ],
  startDate: "05.10.2026",
  endDate: "08.10.2026",
  startEvent: {
    date: "05.10.2026",
    time: "10:30 Uhr",
    building: "Berliner Tor 21",
    buildingShort: "BT21",
    room: "der Aula",
    mapsUrl: "https://maps.app.goo.gl/aEXW4oQkYzA13sATA",
  },
  contactEmail: "oe-inf@haw-hamburg.de",
};
