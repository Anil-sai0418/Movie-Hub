import React from "react";
import { useNavigate } from "react-router-dom";

function Error() {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen w-full bg-black text-white relative overflow-hidden">
      
      {/* Background glow */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-black to-black opacity-90" />

      {/* Content */}
      <div className="relative z-10 min-h-screen flex flex-col justify-center items-center text-center px-6">
        
        <h1 className="text-[8rem] md:text-[10rem] font-extrabold tracking-tight text-white/90">
          404
        </h1>

        <p className="mt-4 text-xl md:text-2xl text-gray-300 max-w-xl">
          Looks like you’ve reached the end of the reel.  
          This page doesn’t exist.
        </p>

        <div className="mt-10 flex flex-wrap gap-4 justify-center">
          <button
            onClick={() => navigate("/")}
            className="px-8 py-3 rounded-full bg-red-600 hover:bg-red-700 transition font-semibold"
          >
            ⬅ Back to Home
          </button>

          <button
            onClick={() => navigate(-1)}
            className="px-8 py-3 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur transition font-semibold"
          >
            Go Back
          </button>
        </div>

        <p className="mt-12 text-sm text-gray-500">
          Error Code: 404 • Page Not Found
        </p>
      </div>
    </div>
  );
}

export default Error
