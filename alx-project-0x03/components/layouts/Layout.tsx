
import { ReactNode } from "react";
import Header from "./Header";
import Footer from "./Footer";
import { LayoutProps } from '@/interface';


const Layout: React.FC<LayoutProps> = ({ children }) => (
  <>
    <Header />
    <main className="pt-24"> {/* add top padding to offset fixed Header */}
      {children}
    </main>
    <Footer />
  </>
);

export default Layout;
