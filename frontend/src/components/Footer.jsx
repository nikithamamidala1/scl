import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white text-center py-4 mt-10">
      <p>© {new Date().getFullYear()} My School. All Rights Reserved.</p>
    </footer>
  );
};

export default Footer;
