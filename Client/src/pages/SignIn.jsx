import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FaEnvelope, FaLock } from 'react-icons/fa';
import { useSelector, useDispatch } from 'react-redux';
import { signInStart, signInSuccess, signInFailure } from '../redux/user/userSlice';

const SignIn = () => {
  const [formData, setFormData] = useState({});
  const { loading, error } = useSelector((state) => state.user);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      dispatch(signInStart());
      const res = await fetch('/api/auth/signin', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (!res.ok) {
        dispatch(signInFailure(data.message || 'Failed to sign in'));
        return;
      }

      dispatch(signInSuccess(data));
      navigate('/'); // Redirect on successful login
    } catch (err) {
      dispatch(signInFailure(err.message || 'Something went wrong'));
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
              id="password"
              placeholder="Password"
              required
              onChange={handleChange}
            />
          </div>

          <p className="mb-4 text-indigo-500 cursor-pointer text-right">
            Forgot password?
          </p>

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

        {error && (
          <p className="text-red-500 mt-5 text-center">{error}</p>
        )}
      </div>
    </div>
  );
};

export default SignIn;
