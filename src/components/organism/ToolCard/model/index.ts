import { ToolDto } from "@/entities/dto/ToolDto";
import { StringUrl } from "@/shared/types/named";

export interface ToolCardViewData {
  id: number;
  faviconUri: StringUrl;
  title: string;
  /**
   * Preferably around 2 lines.
   */
  description: string;
  tags: string[];
  toolUrl: StringUrl;
}

export async function fromDto(dto: ToolDto): Promise<ToolCardViewData> {
  const { description, id, tags: _tags, title, toolUrl } = dto;

  const tags = _tags; // TODO: Map tags to display name

  return {
    description,
    faviconUri: 'https://api.dicebear.com/9.x/identicon/png?seed="Felix"', // TODO: Use API
    id,
    tags,
    title,
    toolUrl,
  };
}
