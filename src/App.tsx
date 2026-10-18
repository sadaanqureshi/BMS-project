import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginForm from "./pages/Loginpage";
import SignupForm from "./pages/Signuppage";
import LandingPage from "./pages/Landingpage";
import CustomerDashboard from "./pages/CustomerDashboard";
function App() {
  return (
    <Router>
      <Routes>
        {/* Default route -> Login page */}
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<LoginForm />} />
        <Route path="/signup" element={<SignupForm />} />
        <Route path="/customer-dashboard" element={<CustomerDashboard />} />

        {/* Baaki pages */}
        {/* <Route path="/home" element={<Home />} /> */}
        {/* <Route path="/customer-dashboard" element={<CustomerDashboard />} /> */}
      </Routes>
    </Router>
  );
}

export default App;
