import type { LinkCollectionEntry, StudiengangPageId } from "../types/types";

const hvvSemesterTicketLink: LinkCollectionEntry = {
  label: "HVV Semesterticket",
  href: "https://www.haw-hamburg.de/ticket/",
  note: "Fahrkarte für den öffentlichen Nahverkehr (ÖPNV)",
};

const onlineServicesLink: LinkCollectionEntry = {
  label: "Online Services der HAW-Hamburg",
  href: "https://www.haw-hamburg.de/online-services/",
  note: "Infos zum HAW-Account, WLAN, etc.",
};

const myHawLink: LinkCollectionEntry = {
  label: "myHAW",
  href: "https://myhaw.haw-hamburg.de/qisserver/pages/cs/sys/portal/hisinoneStartPage.faces",
  note: "Stundenplan, Anmeldungen, Immatrikulationsbescheinigung",
};

const klausurenSammlungLinkINF: LinkCollectionEntry = {
  label: "Klausursammlung",
  href: "https://klausuren.i2e.fsr.haw-hamburg.de",
  note: "Anmeldung mit myHAW Login",
};

const klausurenSammlungLinkEMI: LinkCollectionEntry = {
  label: "Klausursammlung",
  href: "https://i2e.fsr.haw-hamburg.de/klausurensammlung",
};

const teamsRaumSupportLink: LinkCollectionEntry = {
  label: "Teams-Raum: Support Dep. Informatik IT-Dienste",
  href: "https://teams.microsoft.com/l/team/19%3ay5ntVez7ReKIrVVO8wpA4uZ0R2DDOcRY_ycOPU0os5k1%40thread.tacv2/conversations?groupId=210ebdb1-ac51-4456-af15-7b0c570b3945&tenantId=2c6cac8d-ab61-47b3-8209-4df2e46aefbc",
  note: "Informationen zu IT-Dienste/ Beantragung PC-Pool-Account",
  teamsCode: "qwlqb91",
};

const emiCommon = [onlineServicesLink, hvvSemesterTicketLink, myHawLink, klausurenSammlungLinkEMI];

const infCommon = [
  hvvSemesterTicketLink,
  onlineServicesLink,
  myHawLink,
  {
    label: "Moodle: Informationen zu Veranstaltungen",
    href: "https://moodle.haw-hamburg.de/course/view.php?id=9907",
  },
  teamsRaumSupportLink,
  klausurenSammlungLinkINF,
];

export const linksByPage: Record<StudiengangPageId, LinkCollectionEntry[]> = {
  et: [
    {
      label: "HAW-Hamburg Webseite: Informationen zum Studiengang",
      href: "https://www.haw-hamburg.de/bachelor-elektrotechnik-und-informationstechnik-studierende/",
    },
    ...emiCommon,
  ],
  ie: [
    {
      label: "HAW-Hamburg Webseite: Informationen zum Studiengang",
      href: "https://www.haw-hamburg.de/bachelor-information-engineering-studierende/",
    },
    ...emiCommon,
  ],
  mt: [
    {
      label: "HAW-Hamburg Webseite: Informationen zum Studiengang",
      href: "https://www.haw-hamburg.de/bachelor-medientechnik-studierende/",
    },
    ...emiCommon,
  ],
  ree: [
    {
      label: "HAW-Hamburg Webseite: Informationen zum Studiengang",
      href: "https://www.haw-hamburg.de/bachelor-regenerative-energiesysteme-studierende/",
    },
    ...emiCommon,
  ],
  ai: [
    {
      label: "HAW-Hamburg Webseite: Informationen zum Studiengang",
      href: "https://www.haw-hamburg.de/bachelor-angewandte-informatik-studierende/",
    },
    ...infCommon,
  ],
  "its-ecs": [
    {
      label: "HAW-Hamburg Webseite: Informationen zum Studiengang (ITS)",
      href: "https://www.haw-hamburg.de/bachelor-technische-informatik-studierende/",
    },
    {
      label: "HAW-Hamburg Webseite: Informationen zum Studiengang (ECS)",
      href: "https://www.haw-hamburg.de/bachelor-elektrotechnik-und-informationstechnik-studierende/",
    },
    ...infCommon,
  ],
  wi: [
    {
      label: "HAW-Hamburg Webseite: Informationen zum Studiengang",
      href: "https://www.haw-hamburg.de/bachelor-european-computer-science-studierende/",
    },
    ...infCommon,
  ],
  bim: [
    {
      label: "HAW-Hamburg Webseite: Informationen zum Studiengang",
      href: "https://www.haw-hamburg.de/bachelor-bibliotheks-und-informationsmanagement-studierende/",
    },
    ...infCommon,
    {
      label: "Campus-Bibliothek",
      href: "https://www.haw-hamburg.de/hibs/oeffnungszeiten-und-standorte/fachbibliothek-dmi/",
    },
  ],
  mi: [
    {
      label: "HAW-Hamburg Webseite: Informationen zum Studiengang",
      href: "https://www.haw-hamburg.de/bachelor-medieninformatik-studierende/",
    },
    ...infCommon,
  ],
  "m-inf": [
    {
      label: "HAW-Hamburg Webseite: Informationen zum Studiengang",
      href: "https://www.haw-hamburg.de/master-informatik-studierende/",
    },
    ...infCommon,
  ],
};
