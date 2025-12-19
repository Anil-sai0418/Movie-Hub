import React from 'react'

function Footer() {
  return (
    <footer className="w-full bg-gradient-to-t from-black via-gray-900 to-black text-gray-300 pt-16 pb-10 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12">

        {/* Brand */}
        <div>
          <h2 className="text-2xl font-bold text-white mb-4">MovieHub</h2>
          <p className="text-sm leading-relaxed text-gray-400">
            A premium movie discovery platform built for cinematic lovers.
            Explore trending, top‑rated, and latest movies with a modern experience.
          </p>
        </div>

        {/* Navigation */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Explore</h3>
          <ul className="space-y-3 text-sm">
            <li>
              <a href="/" className="hover:text-white transition">
                Home
              </a>
            </li>
         
           
          </ul>
        </div>

      

        {/* Contact */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Contact</h3>
          <p className="text-sm text-gray-400">support@moviehub.com</p>
          <p className="text-sm text-gray-400 mt-1">+91 70759 23575</p>
        

        
        </div>
      </div>

      {/* Divider */}
      <div className="max-w-7xl mx-auto px-6 mt-12">
        <div className="border-t border-white/10 pt-6 text-center text-sm text-gray-500">
          © {new Date().getFullYear()} MovieHub. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

export default Footer
