const Footer = () => {
    return (
      <footer className="bg-slate-950 text-gray-300">
        <div className="max-w-7xl mx-auto px-6 py-16">
          <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-5">
  
            {/* Company */}
            <div className="lg:col-span-2">
              <h2 className="text-3xl font-bold text-white">
                Blue Orbit AI
              </h2>
  
              <p className="mt-5 leading-7 text-gray-400">
                We help businesses transform through Artificial Intelligence,
                Data Engineering, Cloud Computing, and Custom Software
                Development.
              </p>
  
              <div className="flex gap-4 mt-6">
                <a
                  href="#"
                  className="h-10 w-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-blue-600 transition"
                >
                  🌐
                </a>
  
                <a
                  href="#"
                  className="h-10 w-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-blue-600 transition"
                >
                  💼
                </a>
  
                <a
                  href="#"
                  className="h-10 w-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-blue-600 transition"
                >
                  📘
                </a>
  
                <a
                  href="#"
                  className="h-10 w-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-blue-600 transition"
                >
                  🐦
                </a>
              </div>
            </div>
  
            {/* Services */}
            <div>
              <h3 className="text-white font-semibold text-lg mb-5">
                Services
              </h3>
  
              <ul className="space-y-3">
                <li className="hover:text-white cursor-pointer">
                  AI Development
                </li>
  
                <li className="hover:text-white cursor-pointer">
                  AI Agents
                </li>
  
                <li className="hover:text-white cursor-pointer">
                  Machine Learning
                </li>
  
                <li className="hover:text-white cursor-pointer">
                  Data Engineering
                </li>
  
                <li className="hover:text-white cursor-pointer">
                  Cloud Solutions
                </li>
              </ul>
            </div>
  
            {/* Company */}
            <div>
              <h3 className="text-white font-semibold text-lg mb-5">
                Company
              </h3>
  
              <ul className="space-y-3">
                <li className="hover:text-white cursor-pointer">
                  About Us
                </li>
  
                <li className="hover:text-white cursor-pointer">
                  Industries
                </li>
  
                <li className="hover:text-white cursor-pointer">
                  Careers
                </li>
  
                <li className="hover:text-white cursor-pointer">
                  Blog
                </li>
  
                <li className="hover:text-white cursor-pointer">
                  Contact
                </li>
              </ul>
            </div>
  
            {/* Contact */}
            <div>
              <h3 className="text-white font-semibold text-lg mb-5">
                Contact
              </h3>
  
              <ul className="space-y-4 text-gray-400">
                <li>📍 Agra Uttar Pradesh, India</li>
  
                <li>📧 lalit.kumar.in07@gmail.com</li>
  
                <li>📞 +91 96934165299</li>
  
                <li>🕒 Mon - Fri (9:00 AM - 6:00 PM)</li>
              </ul>
            </div>
  
          </div>
  
          {/* Bottom */}
  
          <div className="border-t border-slate-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
  
            <p className="text-sm text-gray-500">
              © {new Date().getFullYear()} AlterAI. All rights reserved.
            </p>
  
            <div className="flex gap-6 text-sm">
              <a href="#" className="hover:text-white">
                Privacy Policy
              </a>
  
              <a href="#" className="hover:text-white">
                Terms & Conditions
              </a>
  
              <a href="#" className="hover:text-white">
                Cookie Policy
              </a>
            </div>
  
          </div>
        </div>
      </footer>
    );
  };
  
  export default Footer;