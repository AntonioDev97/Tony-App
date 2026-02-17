import React from "react";
import './_footer.style.scss';

const Footer: React.FC = () => {
  return (
    <footer id='main-footer' className="text-center py-4">
      <p>&copy; {new Date().getFullYear()} Tony&apos;s web site. All rights reserved.</p>
    </footer>
  );
};

export default Footer;