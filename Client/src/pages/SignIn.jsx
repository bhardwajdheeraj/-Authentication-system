import { Link ,useNavigate} from 'react-router-dom';
import { FaEnvelope, FaLock } from 'react-icons/fa';
import React, { useState } from 'react';

const SignIn = () => {
  const [formData, setFormData] = useState({});
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
 const navigate = useNavigate();
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      setError(false);
      const res = await fetch('/api/auth/signin', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await res.json();
      setLoading(false);

      if (data.success === false) {
        setError(true);
        return;
      }
    navigate('/'); // Redirect to home page on successful sign-in
      // Handle success (e.g., navigate, store token, etc.)
    } catch (error) {
      setLoading(false);
      setError(true);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-white via-pink-200 to-purple-200">
      <div className="bg-slate-900 p-10 rounded-lg shadow-lg w-full sm:w-96 text-indigo-300 text-sm">
        <h1 className="text-3xl text-center font-semibold mb-7 text-white">Sign In</h1>

        <form onSubmit={handleSubmit}>
          {/* Email */}
          <div className="mb-4 flex items-center gap-3 w-full px-5 py-2.5 rounded-full bg-[#333A5C]">
            <FaEnvelope className="text-white" />
            <input
              className="bg-transparent outline-none text-white placeholder-white w-full"
              type="email"
              name="email"
              id="email"
              placeholder="Email ID"
              required
              onChange={handleChange}
            />
          </div>

          {/* Password */}
          <div className="mb-4 flex items-center gap-3 w-full px-5 py-2.5 rounded-full bg-[#333A5C]">
            <FaLock className="text-white" />
            <input
              className="bg-transparent outline-none text-white placeholder-white w-full"
              type="password"
              name="password"
              id="password"
              placeholder="Password"
              required
              onChange={handleChange}
            />
          </div>

          <p className="mb-4 text-indigo-500 cursor-pointer text-right">Forgot password?</p>

          <button
            disabled={loading}
            type="submit"
            className="w-full py-2.5 rounded-full bg-gradient-to-r from-indigo-500 to-indigo-900 text-white font-medium hover:opacity-90 transition duration-300"
          >
            {loading ? 'Loading...' : 'Sign In'}
          </button>
        </form>

        <div className="mt-6 text-center text-white">
          <p>Don't have an account?</p>
          <Link to="/signup" className="text-indigo-500 hover:underline">
            <span className="text-indigo-500">Sign Up</span>
          </Link>
        </div>

        <p className="text-red-500 mt-5">{error && 'Something went wrong!'}</p>
      </div>
    </div>
  );
};

export default SignIn;
