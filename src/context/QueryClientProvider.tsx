"use client";
import React from "react";
import {
  QueryClient,
  QueryClientProvider as Provider,
} from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
type Props = {
  children: React.ReactNode;
};

function QueryClientProvider({ children }: Props) {
  // Create a client
  const queryClient = new QueryClient();

  return (
    <Provider client={queryClient}>
      {children} <ReactQueryDevtools initialIsOpen={false} />
    </Provider>
  );
}

export default QueryClientProvider;
