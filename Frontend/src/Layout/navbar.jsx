import { ChevronDown } from "lucide-react";

const Navbar = () => {
  return (
    <header className="sticky top-0 z-50 bg-white shadow">
      <div className="max-w-7xl mx-auto h-20 flex items-center justify-between px-6">

        {/* Logo */}
        <h1 className="text-3xl font-bold text-blue-600">
         Blue Orbit AI
        </h1>

        {/* Navigation */}
        <nav>
          <ul className="flex items-center gap-10">

            <li className="font-medium hover:text-blue-600 cursor-pointer">
              About
            </li>

            {/* Services */}
            <li className="group relative">

              <div className="flex items-center gap-1 cursor-pointer font-medium hover:text-blue-600">
                Services
                <ChevronDown size={18}/>
              </div>

              <div
                className="absolute left-0 top-full mt-6
                invisible opacity-0 translate-y-3
                group-hover:visible
                group-hover:opacity-100
                group-hover:translate-y-0
                transition-all duration-300"

              >

                <div className="w-[700px] rounded-2xl bg-white shadow-xl p-8">

                  <div className="grid grid-cols-2 gap-8">

                    <div className="hover:bg-gray-50 rounded-xl p-5 cursor-pointer">
                      <h3 className="font-semibold text-lg">
                        AI Development
                      </h3>

                      <p className="text-gray-500 mt-2">
                        Enterprise AI applications powered by LLMs.
                      </p>
                    </div>

                    <div className="hover:bg-gray-50 rounded-xl p-5 cursor-pointer">
                      <h3 className="font-semibold text-lg">
                        AI Agents
                      </h3>

                      <p className="text-gray-500 mt-2">
                        Autonomous AI workflow automation.
                      </p>
                    </div>

                    <div className="hover:bg-gray-50 rounded-xl p-5 cursor-pointer">
                      <h3 className="font-semibold text-lg">
                        Data Engineering
                      </h3>

                      <p className="text-gray-500 mt-2">
                        ETL, Warehousing and Data Pipelines.
                      </p>
                    </div>

                    <div className="hover:bg-gray-50 rounded-xl p-5 cursor-pointer">
                      <h3 className="font-semibold text-lg">
                        Cloud Solutions
                      </h3>

                      <p className="text-gray-500 mt-2">
                        Deploy scalable AI on AWS, Azure and GCP.
                      </p>
                    </div>
                    <div className="hover:bg-gray-50 rounded-xl p-5 cursor-pointer">
                      <h3 className="font-semibold text-lg">
                        Cloud Solutions
                      </h3>

                      <p className="text-gray-500 mt-2">
                        Deploy scalable AI on AWS, Azure and GCP.
                      </p>
                    </div>

                  </div>

                </div>

              </div>

            </li>

            <li className="font-medium hover:text-blue-600 cursor-pointer">
              Industries
            </li>

            <li className="font-medium hover:text-blue-600 cursor-pointer">
              Company
            </li>

            <li className="font-medium hover:text-blue-600 cursor-pointer">
              Contact
            </li>

          </ul>
        </nav>

        {/* Button */}
        <button className="bg-blue-600 hover:bg-blue-700 transition px-6 py-3 rounded-lg text-white font-semibold">
          Let's Talk
        </button>

      </div>
    </header>
  );
};

export default Navbar;