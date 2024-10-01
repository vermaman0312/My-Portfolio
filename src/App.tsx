import { useEffect, useState } from "react";
import "./App.css";
import RouteIndex from "./routes/route-index";
import PortfolioSplashScreenPage from "./pages/splash-screen-page/page";

function App() {
  const [isSplashScreen, setIsSplashScreen] = useState<boolean>(true);

  useEffect(() => {
    if (isSplashScreen) {
      setTimeout(() => {
        setIsSplashScreen(false);
      }, 8000);
    }
  }, [isSplashScreen]);

  if (isSplashScreen) {
    return (
      <div className="w-screen h-screen bg-[#0E0E0E]">
        <PortfolioSplashScreenPage />
      </div>
    );
  }
  return (
    <div className="w-screen h-screen bg-[#0E0E0E]">
      <RouteIndex />
    </div>
  );
}

export default App;
