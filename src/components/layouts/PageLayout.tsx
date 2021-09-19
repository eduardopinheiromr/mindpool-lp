import { ReactNode } from "react";
import Header from "@components/sections/Header";
import Footer from "@components/sections/Footer";

type PageLayoutProps = {
  children: ReactNode;
};

export default function PageLayout({ children }: PageLayoutProps) {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
}
