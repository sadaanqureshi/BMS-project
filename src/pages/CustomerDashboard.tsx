import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import CustomerDetails from "./CustomerDetails";
import MenuCard from "./MenuCard";

interface Customer {
  CustomerID: string;
  FirstName: string;
  LastName: string;
  AccountID?: string;
  AccountType?: string;
  Balance?: number;
  Email?: string;
  Phone?: string;
}

const CustomerDashboard: React.FC = () => {
  const [customer, setCustomer] = useState<Customer | null>(null);
  const navigate = useNavigate();
  const CustomerID = localStorage.getItem("CustomerID");

  useEffect(() => {
    if (!CustomerID) {
      alert("You need to log in first!");
      navigate("/login");
      return;
    }

    const fetchCustomerData = async () => {
      try {
        const response = await axios.get(
          `http://localhost:5010/api/v1/customers/get/${CustomerID}`
        );
        if (response.data.success) {
          setCustomer(response.data.data as Customer);
        } else {
          alert("No customer details found! Please log in again.");
          navigate("/login");
        }
      } catch (error) {
        console.error("Error fetching customer details:", error);
        alert("Error fetching customer details");
        navigate("/login");
      }
    };

    fetchCustomerData();
  }, [CustomerID, navigate]);

  const navigateToService = (service: string) => {
    navigate(`/${service}`);
  };

  if (!customer) {
    return (
      <div className="flex justify-center items-center h-screen bg-gradient-to-br from-blue-900 to-indigo-800 text-white text-xl">
        Loading...
      </div>
    );
  }

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-br from-blue-900 to-indigo-800 text-white">
      {/* Header */}
      <header className="bg-blue-950 shadow-md text-white p-8 text-center">
        <h1 className="text-4xl font-bold tracking-wide">
          Welcome, {customer.FirstName} {customer.LastName}
        </h1>
        <p className="text-lg opacity-80">Your personalized dashboard</p>
      </header>

      {/* Content */}
      <div className="flex-1 p-8">
        <CustomerDetails customer={customer} />

        <div className="mt-10">
          <h3 className="text-2xl font-semibold mb-6 border-b border-blue-400 pb-2">
            Quick Actions
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <MenuCard title="Deposit Amount" onClick={() => navigateToService("deposit")} />
            <MenuCard title="Withdraw Amount" onClick={() => navigateToService("withdraw")} />
            <MenuCard title="Apply for Loan" onClick={() => navigateToService("loan")} />
            <MenuCard title="Request ATM Card" onClick={() => navigateToService("request-atm")} />
            <MenuCard title="Report a Problem" onClick={() => navigateToService("report-problem")} />
            <MenuCard title="Update Account" onClick={() => navigateToService("updateAccount")} />
            <MenuCard title="Delete Account" onClick={() => navigateToService("deleteAccount")} />
            <MenuCard title="Send Money" onClick={() => navigateToService("createTransaction")} />
            <MenuCard title="Pay Money" onClick={() => navigateToService("payments")} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomerDashboard;
