import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const SignupForm = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data: any) => {
    try {
      // Customer create
      const customerResponse = await axios.post(
        "http://localhost:5010/api/v1/customers/create",
        data
      );
      alert(customerResponse.data.message || "Customer created successfully!");

      // Account create
      const accountData = {
        CustomerID: data.CustomerID,
        AccountType: data.AccountType,
      };
      const accountResponse = await axios.post(
        "http://localhost:5010/api/v1/accounts/create",
        accountData
      );
      alert(accountResponse.data.message || "Account created successfully!");

      // Navigate to login
      navigate("/login");
    } catch (error: any) {
      console.error("Error during signup:", error);
      alert(error.response?.data?.message || "Error during signup");
    }
  };

  return (
    <div className="flex min-h-screen">
      {/* Left Section (Gradient + Welcome Text) */}
      <div className="hidden lg:flex lg:w-1/2 bg-gradient-to-b from-blue-900 via-blue-700 to-blue-500 items-center justify-center">
        <h1 className="text-4xl font-bold text-white text-center px-6">
          Start Your Banking Journey 🚀
        </h1>
      </div>

      {/* Right Section (Form Card) */}
      <div className="flex w-full lg:w-1/2 items-center justify-center bg-gradient-to-b from-blue-50 to-blue-100 px-6 sm:px-10">
        {/* Card with fixed height */}
        <div className="bg-white rounded-2xl shadow-lg p-8 w-full max-w-md h-[600px] flex flex-col">
          {/* Heading */}
          <div className="text-center mb-4">
            <h1 className="text-3xl font-bold text-blue-700">Create Account</h1>
            <p className="text-gray-600 text-sm">Sign up to start banking with us</p>
          </div>

          {/* Scrollable Form */}
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="space-y-4 overflow-y-auto pr-2 flex-1"
          >
            {/* Customer ID */}
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Customer ID
              </label>
              <input
                type="text"
                {...register("CustomerID", { required: "Customer ID is required" })}
                className="w-full mt-1 px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-400 focus:outline-none"
                placeholder="Enter Customer ID"
              />
              {errors.CustomerID && (
                <p className="text-red-500 text-sm">{errors.CustomerID.message as string}</p>
              )}
            </div>

            {/* First Name */}
            <div>
              <label className="block text-sm font-medium text-gray-700">
                First Name
              </label>
              <input
                type="text"
                {...register("FirstName", { required: "First Name is required" })}
                className="w-full mt-1 px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-400 focus:outline-none"
                placeholder="Enter First Name"
              />
              {errors.FirstName && (
                <p className="text-red-500 text-sm">{errors.FirstName.message as string}</p>
              )}
            </div>

            {/* Last Name */}
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Last Name
              </label>
              <input
                type="text"
                {...register("LastName", { required: "Last Name is required" })}
                className="w-full mt-1 px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-400 focus:outline-none"
                placeholder="Enter Last Name"
              />
              {errors.LastName && (
                <p className="text-red-500 text-sm">{errors.LastName.message as string}</p>
              )}
            </div>

            {/* Address */}
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Address
              </label>
              <input
                type="text"
                {...register("Address", { required: "Address is required" })}
                className="w-full mt-1 px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-400 focus:outline-none"
                placeholder="Enter Address"
              />
              {errors.Address && (
                <p className="text-red-500 text-sm">{errors.Address.message as string}</p>
              )}
            </div>

            {/* Email */}
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Email
              </label>
              <input
                type="email"
                {...register("Email", {
                  required: "Email is required",
                  pattern: {
                    value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                    message: "Invalid email address",
                  },
                })}
                className="w-full mt-1 px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-400 focus:outline-none"
                placeholder="Enter Email"
              />
              {errors.Email && (
                <p className="text-red-500 text-sm">{errors.Email.message as string}</p>
              )}
            </div>

            {/* Phone */}
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Phone
              </label>
              <input
                type="tel"
                {...register("Phone", {
                  required: "Phone is required",
                  pattern: {
                    value: /^[0-9]{10,15}$/,
                    message: "Phone number must be 10-15 digits",
                  },
                })}
                className="w-full mt-1 px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-400 focus:outline-none"
                placeholder="Enter Phone"
              />
              {errors.Phone && (
                <p className="text-red-500 text-sm">{errors.Phone.message as string}</p>
              )}
            </div>

            {/* Branch ID (Optional) */}
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Branch ID (Optional)
              </label>
              <input
                type="text"
                {...register("BranchID")}
                className="w-full mt-1 px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-400 focus:outline-none"
                placeholder="Enter Branch ID"
              />
            </div>

            {/* Account Type */}
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Account Type
              </label>
              <select
                {...register("AccountType", { required: "Account type is required" })}
                className="w-full mt-1 px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-400 focus:outline-none"
              >
                <option value="">Select</option>
                <option value="Savings">Savings</option>
                <option value="Current">Current</option>
              </select>
              {errors.AccountType && (
                <p className="text-red-500 text-sm">{errors.AccountType.message as string}</p>
              )}
            </div>

            {/* Password */}
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Password
              </label>
              <input
                type="password"
                {...register("Password", {
                  required: "Password is required",
                  pattern: {
                    value: /^(?=.*[A-Z])(?=.*\d).*$/,
                    message: "Password must include at least one uppercase letter and one number",
                  },
                })}
                className="w-full mt-1 px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-400 focus:outline-none"
                placeholder="Enter Password"
              />
              {errors.Password && (
                <p className="text-red-500 text-sm">{errors.Password.message as string}</p>
              )}
            </div>

            {/* Submit */}
            <button
              type="submit"
              className="w-full mt-2 px-6 py-2.5 text-lg font-semibold bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
            >
              Sign Up
            </button>
          </form>

          {/* Link to Login */}
          <div className="text-center mt-3">
            <p className="text-gray-700 text-sm">
              Already have an account?{" "}
              <button
                className="text-blue-600 font-semibold hover:underline"
                onClick={() => navigate("/login")}
              >
                Login
              </button>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignupForm;
