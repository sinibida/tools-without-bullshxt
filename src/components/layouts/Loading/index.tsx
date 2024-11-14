import ErrorIndicator from "@/components/atomic/ErrorIndicator";
import LoadingIndicator from "@/components/atomic/LoadingIndicator";
import { UseQueryResult } from "@tanstack/react-query";
import React from "react";

type QueryType = UseQueryResult;

export default function Loading({
  query,
  children,
}: {
  query: QueryType;
  children?: React.ReactNode;
}) {
  const { isPending, isError, error } = query;

  if (isPending) return <LoadingIndicator />;

  if (isError) return <ErrorIndicator error={error} />;

  return children;
}
