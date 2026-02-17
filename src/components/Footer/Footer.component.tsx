import React from "react";

const Footer: React.FC = () => {
  return (
    <footer>
        <p>&copy; {new Date().getFullYear()} Tony&apos;s web site. All rights reserved.</p>
    </footer>
  );
};

export default Footer;