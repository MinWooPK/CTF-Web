import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

// layouts
// import ProtectedRoute from "@layouts/ProtectedRoute";
import Home from "@pages/Home";
import CollaborationsPage from "@pages/CollaborationsPage";
import AboutUsPage from "@pages/AboutUsPage";

// pages
// import Dashboard from "@pages/Dashboard";

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        {/* <Route
          path="not-found"
          element={
            // <LanguageWrapper>
            <NotFound />
            // </LanguageWrapper>
          }
        /> */}
        <Route path="/" element={<Home />} />
        <Route path="/Collaborations" element={<CollaborationsPage />} />
        <Route path="/AboutUs" element={<AboutUsPage />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>{" "}
    </Router>
  );
};

export default AppRoutes;
