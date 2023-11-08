import { useEffect } from "react";
import { AllRoutes } from "./Router";
import { Backgrounds, Header, Footer } from "./components";

export function App() {
  useEffect(() => {
    console.log("%cIwanas portfolio", "color:blue");
    console.log("%ce-mail: iwana.stadeli@hyperisland.se", "color:#BAC1FF");
  }, []);

  return (
    <>
      <Backgrounds />
      <Header />
      {/* <PageTransition> */}
      <AllRoutes />
      {/* </PageTransition> */}
      <Footer />
    </>
  );
}
