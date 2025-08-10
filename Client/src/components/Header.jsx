import React from 'react';
import ShieldIcon from '../assets/auth-logo.jpg'; // Correct path assuming structure
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white p-3 shadow-lg">
      <div className="flex space-x-1">
        
        <img
          src={ShieldIcon}
          alt="Shield Icon"
          className="w-6 h-6 rounded-sm"
        />
        <Link to='/'>
        <h1 className="font-bold text-black">Auth App</h1>
        </Link>
        
      <div className="flex-grow flex justify-end ">

        <ul className='font-semibold flex space-x-4 text-black'>
          <Link to='/'><li>Home</li></Link>
          <Link to='about'><li>About</li></Link>
          {/* <Link to='signup'><li>Sign Up</li></Link> */}
          <Link to='signin'><li>Sign In</li></Link>
            
            
            
            

        </ul>
      </div>
        
      </div>
    </div>
  );
};

export default Header;
