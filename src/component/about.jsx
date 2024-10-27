import profile from "../assets/Tiara. (7).png";
import { FaInstagram, FaEnvelope, FaLinkedin } from 'react-icons/fa';
import { ABOUT_TEXT } from "../constants";

const About = () => {
  return (
    <div className="border-b border-neutral pb-11">
      <h1 className="my-20 text-center text-4xl">
        About
        <span className="text-purple-400 font-bold"> Me</span>
      </h1>
      <div className="flex flex-col lg:flex-row lg:items-start lg:justify-center space-y-10 lg:space-y-0 lg:space-x-10">
        {/* Image Section */}
        <div className="flex flex-col items-center lg:items-start">
          <img 
            src={profile} 
            alt="Tiara" 
            className="rounded-lg object-cover max-w-full h-auto"
            style={{ width: "500px", height: "400px" }} 
          />
          <div className="bg-[#efe2fd] shadow-lg rounded-lg p-5 mt-[-30px] ml-[56px] max-w-sm w-full"> {/* Adjusted ml-[10px] to shift card to the right */}
            <h2 className="text-xl font-semibold text-center">Connect with Me</h2>
            <div className="flex flex-col items-center mt-3 space-y-2">
              <div className="flex items-center">
                <FaInstagram className="text-purple-500 mr-2" />
                <span>@_tiarapsh</span>
              </div>
              <div className="flex items-center">
                <FaEnvelope className="text-purple-500 mr-2" />
                <span>tiarapshr@gmail.com</span>
              </div>
              <div className="flex items-center">
                <FaLinkedin className="text-purple-500 mr-2" />
                <span>linkedin.com/in/tiarapasharamadhani</span>
              </div>
            </div>
          </div>
        </div>
        
        {/* About Text Section */}
        <div className="lg:w-1/2 flex items-center">
          <p className="text-lg leading-relaxed ext-base font-medium tracking-wide">{ABOUT_TEXT}</p>
        </div>
      </div>
    </div>
  );
};

export default About;
