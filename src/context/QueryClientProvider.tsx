"use client";
import React from "react";
import { QueryClient, QueryClientProvider as Provider } from "react-query";
type Props = {
  children: React.ReactNode;
};

function QueryClientProvider({ children }: Props) {
  // Create a client
  const queryClient = new QueryClient();

  return <Provider client={queryClient}>{children} </Provider>;
}

export default QueryClientProvider;
