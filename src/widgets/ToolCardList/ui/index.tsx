import React from "react";
import styles from "./index.module.css";
import { ToolCard } from "@/components/organism/ToolCard";

export default function ToolCardList({ ids }: { ids: number[] }) {
  return (
    <div className={styles.container}>
      {ids.map((id) => (
        <ToolCard key={id} id={id} />
      ))}
    </div>
  );
}
