export interface ToolDto {
  id: number;
  title: string;
  description: string;
  tags: string[];
  toolUrl: string;
  hasBitOfBS?: boolean;
}
