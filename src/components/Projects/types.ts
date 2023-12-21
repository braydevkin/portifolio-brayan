type Activities = {
  detail: string;
};

export type ProjectHistoricProps = {
  company?: string;
  position?: string;
  start: string;
  end: string;
  project?: string;
  activities: Activities[];
};
