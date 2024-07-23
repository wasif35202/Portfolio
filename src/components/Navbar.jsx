import { FaLinkedin } from 'react-icons/fa';
import { FaGithub } from 'react-icons/fa';
import { motion } from 'framer-motion'

const Navbar = () => {
  return (
    <nav className="mb-20 flex items-center justify-between py-6">
      <div className="flex flex-shrink-0 items-center">
        <h1 className="text-2xl font-bold">MW</h1>
      </div>
      <div className="m-8 flex items-center justify-center gap-4 text-2xl">
        <a
          href="https://www.linkedin.com/in/muhammad-wasif-9a2a5a264/"
        >
          <FaLinkedin />
        </a>
        <a href="https://github.com/wasif35202">
          <FaGithub />
        </a>
        
      </div>
    </nav>
  );
};

export default Navbar;
