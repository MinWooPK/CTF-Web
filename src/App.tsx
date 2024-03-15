import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ThemeProvider } from "styled-components";
// import Layout from "./components/Layout";
// import NavHeader from "./components/NavHeader";
// import Home from "./views/Home";
import { defaultTheme } from "./config/theme";
import NavHeader from "./components/NavHeader";
import Layout from "./layout";
import Home from "./views/Home";
import ServicesPage from "./views/Services";
import AboutPage from "./views/About";
import JobPage from "./views/Job";

export default function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <NavHeader />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="/" index element={<Home />} />
            <Route path="/Servicios" element={<ServicesPage />} />
            <Route path="/AboutUs" element={<AboutPage />} />
            <Route path="/Carreras" element={<JobPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}
