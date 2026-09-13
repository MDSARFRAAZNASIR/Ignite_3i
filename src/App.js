import "./App.css";
import Navbar from "./components/Navbar";
import HomePage from "./components/HomePage";
import ScrollToTop from "./components/ScrollToTop";
import AIChatbot from "./components/AIChatbot";
import { Navigate, Route, Routes } from "react-router-dom";
import EnterpriseAppDevelopment from "./components/services/EnterpriseAppDevelopment";
import DevOpsServices from "./components/services/DevOpsServices";
import MobileAppDevelopment from "./components/services/MobileAppDevelopment";
import ArtificialIntelligence from "./components/services/ArtificialIntelligence";
import AwsCloudServices from "./components/services/AwsCloudServices";
import DataAnalytics from "./components/services/DataAnalytics";
import ZendeskServices from "./components/services/ZendeskServices";
import CloudEnaServices from "./components/services/CloudEnaServices";
import DotNetServices from "./components/services/DotNetServices";
import DigitalCreative from "./components/services/DigitalCreative";
import Design from "./components/services/Design";
import Offshore from "./components/services/Offshore";
import ItStaffing from "./components/staffing/ItStaffing";
import ClinicalStaffing from "./components/staffing/ClinicalStaffing";
import AccountingAndFinance from "./components/staffing/AccountingAndFinance";
import AdministrativeAndClerical from "./components/staffing/AdministrativeAndClerical";
import BusinessStaffing from "./components/staffing/BusinessStaffing";
import HealthCare from "./components/staffing/HealthCare";
import DigitalCreatives from "./components/staffing/DigitalCreatives";
import EngineeringStaffing from "./components/staffing/EngineeringStaffing";
import { GovernmentAgencies } from "./components/recruitment/GovernmentAgencies";
import Industries from "./components/insights/Industries";
import DiversityAndInclusion from "./components/aboutus/DiversityAndInclusion";
import AboutUs from "./components/aboutus/AboutUs";
import Careers from "./components/aboutus/Careers";
import ContactUs from "./components/contact/ContactUs";
import ErpNetSuite from "./components/services/ErpNetSuite";

function App() {
  return (
    <>
      <Navbar />
      <ScrollToTop />
      <Routes>
        {/* Home Page Route */}
        <Route path="/" element={<HomePage />} />

        {/* consulting routes */}
        <Route
          path="/it-consulting-service/enterprise-app"
          element={<EnterpriseAppDevelopment />}
        ></Route>
        <Route
          path="/it-consulting-service/artificialIntelligence"
          element={<ArtificialIntelligence />}
        ></Route>
        <Route
          path="/it-consulting-service/devops"
          element={<DevOpsServices />}
        ></Route>
        <Route
          path="/it-consulting-service/mobile-app-development"
          element={<MobileAppDevelopment />}
        ></Route>
        <Route
          path="/it-consulting-service/data-analytics"
          element={<DataAnalytics />}
        ></Route>
        <Route
          path="/it-consulting-service/cloud-enablement"
          element={<CloudEnaServices />}
        ></Route>
        <Route
          path="/it-consulting-service/digital-creative"
          element={<DigitalCreative />}
        ></Route>
        <Route
          path="/it-consulting-service/offshore-services"
          element={<Offshore />}
        ></Route>
        <Route
          path="/it-consulting-service/aws-solution"
          element={<AwsCloudServices />}
        ></Route>
        <Route
          path="/it-consulting-service/netsuit-erp"
          element={<ErpNetSuite />}
        ></Route>
        <Route
          path="/it-consulting-service/zendesk-integration"
          element={<ZendeskServices />}
        ></Route>
        <Route
          path="/it-consulting-service/dotnet-development"
          element={<DotNetServices />}
        ></Route>
        <Route
          path="/it-consulting-service/ui-ux-design"
          element={<Design />}
        ></Route>

        {/* staffing */}
        <Route
          path="/staffing-services/itstafing-services"
          element={<ItStaffing />}
        ></Route>
        <Route
          path="/staffing-services/accounting-finance"
          element={<AccountingAndFinance />}
        ></Route>
        <Route
          path="/staffing-services/clinical-scientific"
          element={<ClinicalStaffing />}
        ></Route>
        <Route
          path="/staffing-services/business-professional"
          element={<BusinessStaffing />}
        ></Route>
        <Route
          path="/staffing-services/digital-creative"
          element={<DigitalCreatives />}
        ></Route>
        <Route
          path="/staffing-services/administrative-clerical"
          element={<AdministrativeAndClerical />}
        ></Route>
        <Route
          path="/staffing-service/healthcare"
          element={<HealthCare />}
        ></Route>
        <Route
          path="/staffing-services/engineering-staffing-solution"
          element={<EngineeringStaffing />}
        ></Route>
        <Route
          path="/staffing-services/recruitment-services/government"
          element={<GovernmentAgencies />}
        ></Route>
        {/* insights */}
        <Route path="/insights/industries" element={<Industries />}></Route>
        {/* About */}
        <Route
          path="/diversity-inclusion"
          element={<DiversityAndInclusion />}
        ></Route>
        <Route path="/about-ignite3i" element={<AboutUs />}></Route>
        <Route path="/career-at-ignite3i" element={<Careers />}></Route>
        <Route path="/contactnow" element={<ContactUs />}></Route>
        {/* Redirect any unknown route to home */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
      <AIChatbot />
    </>
  );
}

export default App;
