import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/Home";
import AuthPage from "./pages/AuthPage";
import LearnMore from "@/pages/LearnMore";
import Layout from "@/components/shared/layout";
import DashboardLayout from "./components/dashboard/Dashboard_Layout";
import Dashboard from "./pages/Dashboard";
import FindYourRep from "./pages/FindYourRep";
import OfficialInformation from "./pages/OfficialInformation";
import OfficialsPage from "./pages/0fficialsPage";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="" element={<Layout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/learn-more" element={<LearnMore />} />
        </Route>
        <Route path="/authpage" element={<AuthPage />} />
        <Route path="" element={<DashboardLayout />}>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/find-your-rep" element={<FindYourRep />} />
          <Route path="/officials/:id" element={<OfficialInformation />} />
          <Route path="/officials-page" element={<OfficialsPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
