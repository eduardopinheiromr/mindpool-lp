import { ReactNode } from "react";
import Header from "@components/ui/Header";

type PageLayoutProps = {
  children: ReactNode;
};

export default function PageLayout({ children }: PageLayoutProps) {
  return (
    <>
      <Header />
      <main>{children}</main>
      {/* <Footer/> */}
    </>
  );
}
