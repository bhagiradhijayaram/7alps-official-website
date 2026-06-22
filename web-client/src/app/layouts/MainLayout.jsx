import { Outlet } from "react-router-dom";

import Header from "../../shared/components/navigation/Header";
import Footer from "../../shared/components/footer/Footer";

const MainLayout = () => {
  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default MainLayout;
