import { Routes, Route, Navigate } from "react-router-dom";
import PortfolioPage from "../pages/portfolio-pages/page";

const RouteIndex = () => {
  return (
    <Routes>
      {/* Redirect from root to the portfolio page */}
      <Route
        path="/"
        element={<Navigate replace to="/portfolio/aman-verma" />}
      />

      {/* Define nested routes */}
      <Route path="/portfolio/aman-verma" element={<PortfolioPage />} />
    </Routes>
  );
};

export default RouteIndex;
