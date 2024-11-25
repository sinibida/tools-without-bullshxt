import { ToolCardViewData } from "@/components/organism/ToolCard";

export const viewData: ToolCardViewData[] = [
  {
    id: 1,
    title: "Lorem Ipsum",
    description:
      "Deserunt elit ea in reprehenderit ea cupidatat in ex enim irure do.",
    tags: ["Lorem", "Ipsum", "Elit"],
    faviconUri: 'https://api.dicebear.com/9.x/identicon/png?seed="Felix"',
    toolUrl: "https://www.google.com/",
  },
  {
    id: 2,
    title: "Metronome",
    description: "Normal Metronome App",
    tags: ["Music", "Metronome"],
    faviconUri: "https://www.metronome-app.com/favicon.ico",
    toolUrl: "https://www.metronome-app.com/",
  },
  {
    id: 3,
    title: "BShitty",
    description: "Normal Metronome App",
    tags: ["Music", "Metronome"],
    faviconUri: "https://www.metronome-app.com/favicon.ico",
    toolUrl: "https://www.metronome-app.com/",
    hasBitOfBS: true,
  },
];
