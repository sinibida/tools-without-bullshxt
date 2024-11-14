"use client"

import Image from "next/image";
import styles from "./page.module.css";
import ToolCardList from "@/widgets/ToolCardList";
import { useQuery } from "@tanstack/react-query";
import { getAllTools } from "@/entities/dto/ToolDto";
import Loading from "@/components/layouts/Loading";

export default function Home() {
  const query = useQuery({
    queryKey: ["Home"],
    queryFn: async () => {
      return {
        cardIds: (await getAllTools()).map((x) => x.id),
      };
    },
  });

  const { data } = query;

  return (
    <div className={styles.container}>
      <nav>
        <div className={styles.titleBox}>
          <h1>Tools Without Bullsh<span style={{color: 'var(--accent)'}}>x</span>t.</h1>
          <p className={styles.byMe}>by <span>SPAUPA</span></p>
        </div>
      </nav>
      <main>
        <Loading query={query}>
          {data && <ToolCardList ids={data.cardIds} />}
        </Loading>
      </main>
    </div>
  );
}
