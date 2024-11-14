"use client"

import Loading from "@/components/layouts/Loading";
import { getTool } from "@/entities/dto/ToolDto";
import { useQuery } from "@tanstack/react-query";
import { fromDto } from "../model";
import ToolCardView from "./ToolCardView";

const ToolCardQuery = Symbol("ToolCardQuery");

export default function ToolCard({ id }: { id: number }) {
  const query = useQuery({
    queryKey: [ToolCardQuery, id],
    queryFn: async () => {
      return await fromDto(await getTool(id));
    },
  });

  const data = query.data!;

  return (
    <div>
      <Loading query={query}>{<ToolCardView data={data} />}</Loading>
    </div>
  );
}
