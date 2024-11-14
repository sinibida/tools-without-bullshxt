import StringID from "@/shared/types/named";
import { Tag } from "../Tag";

interface Tool {
  id: StringID,
  name: string,
  url: string,
  description: string,
  tags: Tag[],
}

export default Tool;
