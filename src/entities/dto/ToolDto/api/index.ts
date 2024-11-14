import { http } from "@/shared/api/http";
import { ToolDto } from "../model";

export async function getAllTools() {
  const response = await http.get('tools');

  return response.data as ToolDto[];
}