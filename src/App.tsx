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
// import GetTaxiPage from "./views/GetTaxi";
// import ServicesPage from "./views/Services";
// import TariffsPage from "./views/Tariffs";
// import ContactPage from "./views/Contact";
// import AboutUsPage from "./views/AboutUs";

export default function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <NavHeader />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="/" index element={<Home />} />
            <Route path="/Services" element={<ServicesPage />} />
            <Route path="/About" element={<AboutPage />} />
            <Route path="/Job" element={<JobPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}
