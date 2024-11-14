"use client";

import Loading from "@/components/layouts/Loading";
import { getTool } from "@/entities/dto/ToolDto";
import { useQuery } from "@tanstack/react-query";
import { fromDto } from "../model";
import ToolCardView from "./ToolCardView";
import styles from "./ToolCard.module.css";

const ToolCardQuery = Symbol("ToolCardQuery");

export default function ToolCard({ id }: { id: number }) {
  const query = useQuery({
    queryKey: [ToolCardQuery, id],
    queryFn: async () => {
      return await fromDto(await getTool(id));
    },
  });

  const data = query.data;
  if (data === undefined) return undefined;

  return (
    <Loading query={query}>
      <a href={data.toolUrl} target="_blank">
        <div className={styles.container}>
          <ToolCardView data={data} />
        </div>
      </a>
    </Loading>
  );
}
