import type { ReactNode } from "react";
import { Header } from "../Header/Header";
import { Footer } from "../Footer/Footer";

type Props = {
  children: ReactNode;
};

export function PageWrapper({ children }: Props) {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
}