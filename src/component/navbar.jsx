import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

const Navbar = () => {
  return (
    <nav className="mb-13 flex items-center justify-between py-6">
      <div className="flex flex-shrink-0 items-center ml-6 w-18"> {/* Added margin-left here */}
        <a href="/" className="flex items-center gap-2">
          <h1 className="text-[30px] font-bold leading-none">Tiara</h1>
          <h4 className="font-normal leading-none">Psh</h4>
        </a>
      </div>
      <div className="m-8 flex items-center justify-center gap-4 text-2xl">
        <a href="https://www.linkedin.com/in/tiarapasharamadhani/" target="_blank" rel="noopener noreferrer">
          <FaLinkedin />
        </a>
        <a href="https://github.com/tiarapsh" target="_blank" rel="noopener noreferrer">
          <FaGithub />
        </a>
        <a href="https://www.instagram.com/_tiarapsh/" target="_blank" rel="noopener noreferrer">
          <FaInstagram />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
