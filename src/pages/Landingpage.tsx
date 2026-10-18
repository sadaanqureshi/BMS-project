import { useNavigate } from "react-router-dom";

const LandingPage = () => {
  const navigate = useNavigate();

  return (
    <div className="w-full min-h-screen flex flex-col">
      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center text-center bg-gradient-to-br from-blue-900 via-indigo-900 to-purple-800 h-[80vh] text-white relative">
        <div className="absolute inset-0 bg-black/30"></div>
        <div className="relative z-10 px-6">
          <h1 className="text-5xl md:text-6xl font-bold drop-shadow-lg">
            Welcome to SafeBank
          </h1>
          <p className="mt-4 text-lg md:text-xl max-w-2xl mx-auto text-gray-200">
            Secure. Reliable. Modern Banking Solutions – tailored just for you.
          </p>
          <button
            onClick={() => {
              document
                .getElementById("login-section")
                ?.scrollIntoView({ behavior: "smooth" });
            }}
            className="mt-8 px-8 py-3 bg-blue-600 text-white rounded-xl text-lg font-semibold hover:bg-blue-700 transition shadow-lg"
          >
            Get Started
          </button>
        </div>
      </section>

      {/* About Section */}
      <section className="flex flex-col items-center py-20 px-6 bg-gradient-to-tr from-blue-100 via-purple-100 to-pink-100">
        <h2 className="text-3xl font-bold text-blue-900">About SafeBank</h2>
        <p className="mt-6 text-gray-700 max-w-3xl text-center leading-relaxed">
          At <span className="font-semibold text-blue-800">SafeBank</span>, we
          believe in empowering our customers with the most secure and modern
          banking services. From hassle-free account creation to seamless money
          transfers, our digital-first approach ensures convenience, speed, and
          safety for all.
        </p>
      </section>

      {/* Login Options */}
      <section
        id="login-section"
        className="flex flex-col items-center py-20 px-6 bg-gradient-to-br from-blue-100 via-purple-100 to-pink-100"
      >
        <h2 className="text-3xl font-bold text-blue-900 mb-10">
          Choose Your Login
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-5xl w-full">
          {/* Admin Card */}
          <div className="bg-white/80 backdrop-blur-lg shadow-xl rounded-2xl p-10 text-center hover:shadow-2xl transition transform hover:-translate-y-1">
            <h3 className="text-2xl font-semibold text-gray-800">
              Admin Login
            </h3>
            <p className="mt-3 text-gray-600">
              Manage employees, customer queries, and keep the bank running
              smoothly.
            </p>
            <button
              onClick={() => navigate("/admin/login")}
              className="mt-6 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
            >
              Login as Admin
            </button>
          </div>

          {/* Customer Card */}
          <div className="bg-white/80 backdrop-blur-lg shadow-xl rounded-2xl p-10 text-center hover:shadow-2xl transition transform hover:-translate-y-1">
            <h3 className="text-2xl font-semibold text-gray-800">
              Customer Login
            </h3>
            <p className="mt-3 text-gray-600">
              Access your accounts, transfer money, apply for loans, and more.
            </p>
            <button
              onClick={() => navigate("/login")}
              className="mt-6 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
            >
              Login as Customer
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-blue-900 text-white text-center py-6 mt-auto">
        <p>&copy; {new Date().getFullYear()} SafeBank. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default LandingPage;
