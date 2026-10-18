import React, { useState } from "react";
import { useForm, type SubmitHandler } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import axios from "axios";

interface LoginFormInputs {
  CustomerID: string;
  Password: string;
}

const LoginForm: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormInputs>();
  const navigate = useNavigate();
  const [loading, setLoading] = useState<boolean>(false);

  const onSubmit: SubmitHandler<LoginFormInputs> = async (data) => {
    const sanitizedData = {
      CustomerID: data.CustomerID.trim(),
      Password: data.Password.trim(),
    };

    setLoading(true);

    try {
      const response = await axios.post(
        "http://localhost:5010/api/v1/auth/login",
        sanitizedData
      );

      if (response.data.success) {
        const { token, customer } = response.data;
        localStorage.setItem("token", token);
        localStorage.setItem("CustomerID", customer.id);

        alert("✅ Login successful!");
        navigate("/customer-dashboard");
      } else {
        alert(response.data.message || "Invalid Customer ID or Password.");
      }
    } catch (error: any) {
      console.error("Login error:", error);
      alert(error.response?.data?.message || "An error occurred during login.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex h-screen w-full">
      {/* Left section - Bank branding */}
      <div className="hidden md:flex w-1/2 bg-gradient-to-br from-[#1e293b] via-[#0f172a] to-[#020617] text-white flex-col justify-center items-center p-10">
        <h1 className="text-5xl font-extrabold mb-6 text-center tracking-wide">
          Secure<span className="text-[#a07a39]">Bank</span>
        </h1>
        <p className="text-lg text-gray-300 text-center max-w-md leading-relaxed">
          Your trusted partner in managing accounts, loans, and transactions —
          all in one secure platform.
        </p>
        
      </div>

      {/* Right section - Login form */}
      <div className="w-full md:w-1/2 flex justify-center items-center bg-gray-50 p-6">
        <div className="w-full max-w-md bg-white rounded-2xl shadow-xl p-8">
          <h2 className="text-3xl font-bold text-center text-[#3d2a1d] mb-2">
            Welcome Back
          </h2>
          <p className="text-center text-gray-500 mb-8">
            Please login to continue
          </p>

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
            {/* Customer ID */}
            <div>
              <label className="block text-gray-700 font-medium mb-1">
                Customer ID
              </label>
              <input
                type="text"
                placeholder="Enter your Customer ID"
                {...register("CustomerID", {
                  required: "Customer ID is required",
                  pattern: {
                    value: /^[0-9]+$/,
                    message: "Customer ID must be numeric",
                  },
                })}
                className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#a07a39]"
              />
              {errors.CustomerID && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.CustomerID.message}
                </p>
              )}
            </div>

            {/* Password */}
            <div>
              <label className="block text-gray-700 font-medium mb-1">
                Password
              </label>
              <input
                type="password"
                placeholder="Enter your password"
                {...register("Password", { required: "Password is required" })}
                className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#a07a39]"
              />
              {errors.Password && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.Password.message}
                </p>
              )}
            </div>

            {/* Login Button */}
            <button
              type="submit"
              disabled={loading}
              className="w-full py-3 text-lg font-semibold bg-[#a07a39] text-white rounded-lg hover:bg-[#8c6530] transition-colors disabled:opacity-50 shadow-md"
            >
              {loading ? "Logging in..." : "Login"}
            </button>
          </form>

          {/* Divider */}
          <div className="flex items-center my-6">
            <hr className="flex-grow border-gray-300" />
            <span className="mx-3 text-gray-400 text-sm">OR</span>
            <hr className="flex-grow border-gray-300" />
          </div>

          {/* Sign up redirect */}
          <div className="text-center">
            <p className="text-gray-500">Don’t have an account?</p>
            <button
              onClick={() => navigate("/signup")}
              className="mt-3 px-6 py-2 bg-[#3d2a1d] text-white rounded-lg hover:bg-[#5a3a28] transition-colors shadow-sm"
            >
              Sign Up
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
