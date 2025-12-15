import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { apiUrl } from "../../Data";

const Login = () => {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      const res = await axios.post(`${apiUrl}/api/auth/login`, form);

      // ✅ Login success
      const token = res.data.token;
      console.log(token);
      localStorage.setItem("token", token);

      // 👉 Redirect to dashboard
      navigate("/dashboard");
    } catch (err) {
      // ❌ Login failed
      setError(err.response?.data?.message || "Invalid email or password");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-lg p-8">
        {/* Logo */}
        <div className="flex justify-center mb-6">
          <h1 className="text-3xl font-bold text-sky-600">PUC</h1>
        </div>

        <h2 className="text-xl font-semibold text-gray-800 text-center">
          Login to Dashboard
        </h2>
        <p className="text-sm text-gray-500 text-center mb-6">
          Manage customers & expiry reminders
        </p>

        {/* Error */}
        {error && (
          <p className="text-red-500 text-sm text-center mb-3">{error}</p>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Email */}
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="admin@puc.com"
              required
              className="mt-1 w-full border border-gray-300 rounded-lg px-3 py-2 outline-sky-400"
            />
          </div>

          {/* Password */}
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Password
            </label>
            <input
              type="password"
              name="password"
              value={form.password}
              onChange={handleChange}
              placeholder="••••••••"
              required
              className="mt-1 w-full border border-gray-300 rounded-lg px-3 py-2 outline-sky-400"
            />
          </div>

          {/* Button */}
          <button
            type="submit"
            disabled={loading}
            className="w-full bg-sky-500 hover:bg-sky-600 text-white py-2 rounded-lg font-medium transition disabled:opacity-50"
          >
            {loading ? "Logging in..." : "Login"}
          </button>
        </form>

        <p className="text-xs text-gray-400 text-center mt-6">
          © {new Date().getFullYear()} PUC Management System
        </p>
      </div>
    </div>
  );
};

export default Login;
