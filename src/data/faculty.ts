import type { FacultyEntry, FacultyId } from "../types/types";

export const faculties = {
  EMI: {
    name: "Elektro-, Medien- und Informationstechnik",
    short: "EMI",
  },
  INF: {
    name: "Informatik und Digitale Gesellschaft",
    short: "INF",
  },
} satisfies Record<FacultyId, FacultyEntry>;
