
"use client";

import "./globals.css";
import {signIn} from "next-auth/react";

const Login = () => {
  return <div className="bg-white mt-8 max-w-md border mx-auto rounded-xl p-20 text-center">
    <h1 className="text-center font-bold text-6xl mb-6">Login</h1>
   <button onClick={() => signIn( 'google' )}
   className="mb-4  bg-blue-500 px-3 py-2 border-indigo-700 border-b-4 rounded-3xl"> LOG IN WITH GOOGLE</button>

    
    
    </div>;
};

export default Login;
