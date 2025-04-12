import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { signUp, signIn, User } from "../utils/auth";
import { toast } from "sonner";

export default function AuthPage() {
  const [isSignup, setIsSignup] = useState(true);
  const [form, setForm] = useState<User>({ email: "", password: "" });
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const success = isSignup ? signUp(form) : signIn(form);
    if (success) {
      toast.success("Login successful");
      navigate("/dashboard");
    } else {
      setError("Invalid credentials. Try again.");
    }
  };

  return (
    <div className="bg-home flex flex-col justify-center h-screen items-center font-display">
      <h1 className="text-5xl mb-20 text-white  font-bold">
        <span className="text-[#8EEBC6]">Civic</span>Link
      </h1>
      <div className="bg-white p-8 rounded-lg shadow-md max-w-[600px] w-full">
        <div className="flex justify-center space-x-4 mb-6">
          <button
            onClick={() => {
              setIsSignup(true);
              setError("");
              setForm({ email: "", password: "" });
            }}
            className={`px-4 py-2 rounded cursor-pointer ${
              isSignup ? "bg-green-600 text-white" : "bg-gray-200"
            }`}
          >
            Sign Up
          </button>
          <button
            onClick={() => {
              setIsSignup(false);
              setError("");
              setForm({ email: "", password: "" });
            }}
            className={`px-4 py-2 rounded cursor-pointer ${
              !isSignup ? "bg-green-600 text-white" : "bg-gray-200"
            }`}
          >
            Sign In
          </button>
        </div>

        <h2 className="text-xl font-semibold mb-4 text-center">
          {isSignup ? "Create an account" : "Welcome back"}
        </h2>

        {error && (
          <p className="text-red-500 text-sm text-center mb-3">{error}</p>
        )}

        <form onSubmit={handleSubmit} className="space-y-7">
          <input
            className="w-full border border-gray-300 py-4 px-2"
            type="email"
            placeholder="Enter Your Email"
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            required
          />
          <input
            className="w-full border border-gray-300 py-4 px-2"
            type="password"
            placeholder="Enter Your Password"
            value={form.password}
            onChange={(e) => setForm({ ...form, password: e.target.value })}
            required
          />
          <button
            type="submit"
            className={`w-full py-2 rounded text-white transition cursor-pointer ${
              isSignup
                ? "bg-[#005C37] hover:bg-green-700"
                : "bg-[#005C37] hover:bg-green-700"
            }`}
          >
            {isSignup ? "Sign Up" : "Sign In"}
          </button>
        </form>
      </div>
    </div>
  );
}
