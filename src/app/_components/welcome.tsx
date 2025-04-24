"use client";

import { api } from "@/trpc/react";

export function Welcome() {
  const hello = api.example.hello.useQuery({ text: "from m0" });

  return (
    <div className="w-full max-w-xs text-center">
      <p>{hello.data?.greeting}</p>
    </div>
  );
}
