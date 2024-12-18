import React from "react";
import { ToolCardViewData } from "../model";
import styles from "./ToolCardView.module.css";
import Image from "next/image";

export default function ToolCardView({ data }: { data: ToolCardViewData }) {
  const { description, faviconUri, tags, title, hasBitOfBS } = data;
  return (
    <div className={styles.container}>
      <Image
        className={styles.image}
        src={faviconUri ?? ""}
        alt="Tool Icon"
        width={128}
        height={128}
      />
      <div className={styles.containerRight}>
        <p className={styles.title}>{title}</p>
        <p className={styles.description}>{description}</p>

        <div style={{ flex: 1 }} />

        <div className={styles.tagContainer}>
          {tags.map((tag, i) => (
            <p className={styles.tag} key={i}>
              {tag}
            </p>
          ))}
        </div>
      </div>
      {/* TODO add intructional message about asterisk*/}
      {hasBitOfBS && (
        <div className={styles.overlayAsterisk}>
          <p>*</p>
        </div>
      )}
    </div>
  );
}
