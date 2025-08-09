import React from "react";

const Footer = () => {
  return (
    <footer className="bg-[#4B4BEC] text-white py-12 px-20">
      <div className=" mx-auto flex flex-col md:flex-row justify-between gap-10">
        <div className="max-w-xs">
          <div className="flex items-center space-x-2 font-bold text-xl mb-3">
            <img src="./images/Logo.svg" alt="" />
          </div>
          <p className="text-md ">
            Your goal is our target. Not anything in between. We use online
            marketing platforms and tools to achieve single objective - your
            business results.
          </p>
        </div>
        <div className="flex justify-between gap-x-70  gap-y-10 flex-col sm:flex-row">
          <div>
            <h4 className="font-semibold mb-3">Our Technologies</h4>
            <ul className="space-y-2 cursor-pointer">
              <li className="hover:text-gray-200 transition">ReactJS</li>
              <li className="hover:text-gray-200 transition">Gatsby</li>
              <li className="hover:text-gray-200 transition">NextJS</li>
              <li className="hover:text-gray-200 transition">NodeJS</li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-3">Our Services</h4>
            <ul className="space-y-2 cursor-pointer">
              <li className="hover:text-gray-200 transition">
                Social Media Marketing
              </li>
              <li className="hover:text-gray-200 transition">
                Web & Mobile App Development
              </li>
              <li className="hover:text-gray-200 transition">
                Data & Analytics
              </li>
            </ul>
          </div>
        </div>
      </div>

      <hr className="border-gray-300 border my-8 max-w-6xl mx-auto" />
      <div className="max-w-6xl mx-auto flex justify-center gap-6 ">
        <p className="hover:text-gray-200 transition cursor-pointer">
          Privacy Policy
        </p>

        <span>|</span>
        <p className="hover:text-gray-200 transition cursor-pointer">
          Terms & Conditions
        </p>
      </div>
    </footer>
  );
};

export default Footer;
