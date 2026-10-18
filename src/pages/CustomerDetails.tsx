import React from "react";

interface Customer {
  CustomerID: string;
  AccountID?: string;
  AccountType?: string;
  Balance?: number;
  Email?: string;
  Phone?: string;
  FirstName?: string;
  LastName?: string;
}

interface Props {
  customer?: Customer;
}

const CustomerDetails: React.FC<Props> = ({ customer }) => {
  if (!customer) return null;

  return (
    <div className="bg-white/10 backdrop-blur-md rounded-xl shadow-lg p-8 text-white 
                max-w-xl mx-auto mt-10">
      <h2 className="text-3xl font-bold text-center mb-6">Account Details</h2>
      <div className="space-y-4">
        <Detail label="Customer ID" value={customer.CustomerID} />
        <Detail label="Account ID" value={customer.AccountID} />
        <Detail label="Account Type" value={customer.AccountType || "Not Available"} />
        <Detail label="Balance" value={`$${customer.Balance?.toLocaleString() || "0"}`} />
        <Detail label="Email" value={customer.Email} />
        <Detail label="Phone" value={customer.Phone} />
      </div>
    </div>
  );
};

// Reusable row
const Detail = ({ label, value }: { label: string; value?: string }) => (
  <div className="flex justify-between border-b border-blue-300 pb-2">
    <span className="font-medium">{label}:</span>
    <span>{value}</span>
  </div>
);

export default CustomerDetails;
