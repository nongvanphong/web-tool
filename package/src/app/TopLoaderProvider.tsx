"use client";

import NextTopLoader from "nextjs-toploader";

export default function ClientProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <NextTopLoader />
      {children}
    </>
  );
}
