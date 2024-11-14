"use client";

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
          <h1>
            Tools Without Bullsh
            <span style={{ color: "var(--accent)" }}>x</span>t.
          </h1>
          <p className={styles.byMe}>
            by <span>SPAUPA</span>
          </p>
        </div>
      </nav>
      <main>
        <Loading query={query}>
          {data && <ToolCardList ids={data.cardIds} />}
        </Loading>
      </main>
      <footer>
        <svg viewBox="0 0 40 4" width="40" height="4">
          <path
            d="M0,0 l4,4 l4,-4 l4,4 l4,-4 l4,4 l4,-4 l4,4 l4,-4 l4,4 l4,-4 "
          />
        </svg>
        <p>SPAUPA, 2024.</p>
      </footer>
    </div>
  );
}
