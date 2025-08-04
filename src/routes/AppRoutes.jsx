import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

// layouts
// import ProtectedRoute from "@layouts/ProtectedRoute";
import Home from "@pages/Home";
import ContactUsPage from "@pages/ContactUsPage";
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
        <Route path="/ContactUs" element={<ContactUsPage />} />
        <Route path="/AboutUs" element={<AboutUsPage />} />
        <Route path="*" element={<Navigate to="/" replace />} />

        {/* <Route path="/login" element={<Login />} />
        {/* Ruta catch-all para cualquier ruta no definida */}
        {/* <Route path="*" element={<Navigate to="/not-found" replace />} /> */}
      </Routes>{" "}
    </Router>
  );
};

export default AppRoutes;
