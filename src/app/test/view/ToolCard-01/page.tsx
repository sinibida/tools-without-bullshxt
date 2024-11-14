import ToolCardView from "@/components/ToolCard/ui/ToolCardView";
import React from "react";
import { viewData } from "./data";

export default function page() {
  return (
    <div>
      {viewData.map((data, i) => (
        <ToolCardView key={i} data={data} />
      ))}
    </div>
  );
}
