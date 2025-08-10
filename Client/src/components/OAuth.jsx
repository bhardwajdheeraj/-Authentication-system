import {GoogleAuthProvider,signInWithPopup,getAuth} from 'firebase/auth';
import { FcGoogle } from 'react-icons/fc';
import { app } from '../firebase'; // Ensure you import the initialized Firebase app
import { useDispatch } from 'react-redux';
import { signInSuccess } from '../redux/user/userSlice';
function OAuth() {
    const dispatch = useDispatch();
const handleGoogleClick = async () => {
    try {
        const provider =new GoogleAuthProvider();
        const auth = getAuth(app);
        const result = await signInWithPopup(auth, provider);
        const res =await fetch('/api/auth/google', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
               name: result.user.displayName,
               email: result.user.email,
               photo: result.user.photoURL,
            }),
        });
        const data = await res.json();
        console.log(data);
        dispatch(signInSuccess(data));
    } catch (error) {
        console.error("Google sign-in failed:", error);
    }
}

  return (
    <button  type='button' onClick={handleGoogleClick} className="bg-red-700 hover:bg-red-800 w-full py-2 rounded-full text-white font-medium mt-3 flex items-center justify-center gap-2 transition duration-200 uppercase">
      <FcGoogle className="w-5 h-5" />
      Continue with Google
    </button>
  );
}

export default OAuth;
