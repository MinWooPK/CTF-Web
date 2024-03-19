import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { defaultTheme } from "./config/theme";
import Layout from "./layout";
import Home from "./views/Home";
import ServicesPage from "./views/Services";
import AboutPage from "./views/About";
import JobPage from "./views/Job";
import PoliticaCookies from "./views/PoliticaCookies";

export default function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="/" index element={<Home />} />
            <Route path="/Servicios" element={<ServicesPage />} />
            <Route path="/AboutUs" element={<AboutPage />} />
            <Route path="/Carreras" element={<JobPage />} />
          </Route>
          <Route path="/Politicas" element={<PoliticaCookies />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}
