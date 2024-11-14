import { http } from "@/shared/api/http";
import { ToolDto } from "../model";
import { sortTools } from "../lib/sort";

export async function getAllTools() {
  const response = await http.get("tools");

  const data = response.data as ToolDto[];

  return sortTools(data);
}

export async function getTool(id: number) {
  const tools = await getAllTools();

  const ret = tools.find((x) => x.id === id);

  if (ret === undefined) {
    throw Error("Tool not found.");
  }

  return ret;
}
