import { http } from "@/shared/api/http";
import { ToolDto } from "../model";

export async function getAllTools() {
  const response = await http.get('tools');

  return response.data as ToolDto[];
}

export async function getTool(id: number) {
  const tools = await getAllTools();

  const ret = tools.find(x => x.id === id);

  if (ret === undefined) {
    throw Error("Tool not found.")
  }

  return ret;
}
