import { ReactNode } from "react";

export default function ProductLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <header>💥💥 PRODUTO 💥💥</header>
      {children}
    </>
  );
}
