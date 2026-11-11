export type FacultyId = "EMI" | "INF";
export type StudiengangId =
  | "ET"
  | "IE"
  | "MT"
  | "REE"
  | "AI"
  | "ITS"
  | "ECS"
  | "WI"
  | "MI"
  | "BIM"
  | "M-INF";
export type StudiengangPageId =
  | "et"
  | "ie"
  | "mt"
  | "ree"
  | "ai"
  | "its-ecs"
  | "wi"
  | "mi"
  | "bim"
  | "m-inf";

export interface LinkCollectionEntry {
  label: string;
  href: string;
  note?: string;
  teamsCode?: string;
}

export interface StudiengangDetailsPage {
  entryId: StudiengangPageId;
  base: `/studiengang`;
}

export interface StudiengangEntry {
  name: string;
  short: StudiengangId;
  degree: string;
  faculty: FacultyEntry;
  details: StudiengangDetailsPage;
}

export interface FacultyEntry {
  name: string;
  short: FacultyId;
}

export interface OeStartEvent {
  date: string;
  time: string;
  building: string;
  buildingShort: string;
  room: string;
  mapsUrl: string;
}

export interface OeInfoCardData {
  studiengaenge: StudiengangEntry[];
  startDate: string;
  endDate: string;
  startEvent: OeStartEvent;
  contactEmail: string;
}

export interface RoadmapDay {
  weekday: string;
  date: string;
  start: string;
  end: string;
  items: string[];
  eveningProgram: string;
}

export interface RoadmapMetadata {
  title: string;
  subtitle: string;
  room: string;
}

export interface RoadmapData {
  metadata: RoadmapMetadata;
  days: RoadmapDay[];
}
