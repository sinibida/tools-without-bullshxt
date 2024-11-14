import { StringUrl } from "@/shared/types/named";

export interface ToolCardViewData {
  id: number,
  faviconUri: StringUrl,
  title: string,
  /**
   * Preferably around 2 lines.
   */
  description: string,
  tags: string[],
  toolUrl: StringUrl,
}