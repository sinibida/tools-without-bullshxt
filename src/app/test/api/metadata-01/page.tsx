"use client";

import { getPageMetaData } from "@/entities/PageMetadata/api";
import { useQuery } from "@tanstack/react-query";

export default function Page() {
  const { data, isError, error } = useQuery({
    queryKey: ["test", "metadata-01"],
    queryFn: () => {
      return getPageMetaData("google.com");
    },
  });

  if (isError) throw error;

  return <div>{JSON.stringify(data)}</div>;
}
