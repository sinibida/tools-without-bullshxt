"use client";

import { getAllTools } from "@/entities/dto/ToolDto";
import { useQuery } from "@tanstack/react-query";
import React from "react";

export default function Page() {
  const { data } = useQuery({
    queryKey: ["test", "json-01"],
    queryFn: () => {
      return getAllTools();
    },
  });

  return <div>{JSON.stringify(data)}</div>;
}
