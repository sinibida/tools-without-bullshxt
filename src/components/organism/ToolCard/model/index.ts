import { ToolDto } from "@/entities/dto/ToolDto";
import { getPageMetaData } from "@/entities/PageMetadata/api";
import { StringUrl } from "@/shared/types/named";

export interface ToolCardViewData {
  id: number;
  faviconUri?: StringUrl;
  title: string;
  /**
   * Preferably around 2 lines.
   */
  description: string;
  tags: string[];
  toolUrl: StringUrl;
  hasBitOfBS?: boolean;
}

export async function fromDto(dto: ToolDto): Promise<ToolCardViewData> {
  const { description, id, tags: _tags, title, toolUrl, hasBitOfBS } = dto;

  const tags = _tags; // TODO: Map tags to display name

  const metadata = await getPageMetaData(toolUrl);

  return {
    description,
    faviconUri: metadata.faviconUrl, // TODO: Use API
    id,
    tags,
    title,
    toolUrl,
    hasBitOfBS: hasBitOfBS ?? false,
  };
}
