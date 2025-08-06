import { Link } from 'react-router-dom'
import { FaUser, FaEnvelope, FaLock } from 'react-icons/fa'

const SignUp = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-white via-pink-200 to-purple-200">


      <div className='bg-slate-900 p-10 rounded-lg shadow-lg w-full sm:w-96 text-indigo-300 text-sm'>
        <h1 className='text-3xl text-center font-semibold mb-7 text-white'>Sign Up</h1>
        
        <form>
          {/* Full Name */}
          <div className="mb-4 flex items-center gap-3 w-full px-5 py-2.5 rounded-full bg-[#333A5C]">
            <FaUser className="text-white" />
            <input
              className="bg-transparent outline-none text-white placeholder-white w-full"
              type="text"
              name="fullName"
              placeholder="Full Name"
              required
            />
          </div>

          {/* Email */}
          <div className="mb-4 flex items-center gap-3 w-full px-5 py-2.5 rounded-full bg-[#333A5C]">
            <FaEnvelope className="text-white" />
            <input
              className="bg-transparent outline-none text-white placeholder-white w-full"
              type="email"
              name="email"
              placeholder="Email ID"
              required
            />
          </div>

          {/* Password */}
          <div className="mb-4 flex items-center gap-3 w-full px-5 py-2.5 rounded-full bg-[#333A5C]">
            <FaLock className="text-white" />
            <input
              className="bg-transparent outline-none text-white placeholder-white w-full"
              type="password"
              name="password"
              placeholder="Password"
              required
            />
          </div>

          <p className='mb-4 text-indigo-500 cursor-pointer text-right'>
            Forgot password?
          </p>

          <button
            type="submit"
            className='w-full py-2.5 rounded-full bg-gradient-to-r from-indigo-500 to-indigo-900 text-white font-medium hover:opacity-90 transition duration-300'
            
          >
            Create Account
          </button>
        </form>
        <div className='mt-6 text-center text-white'>
          <p>Have an account?</p>
          <Link to="/signin" className='text-indigo-500 hover:underline'>
          <span className='text-indigo-500'>Sign in</span>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default SignUp
