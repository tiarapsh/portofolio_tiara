import { HERO_CONTENT } from "../constants";
import profilePic from "../assets/profilePic.png";

const Hero = () => {
  return (
    <div className="border-b border-neutral pb-4 lg:mb-30 -mt-12">
      {" "}
      {/* Added negative margin */}
      <div className="flex flex-wrap lg:flex-nowrap items-center lg:justify-between">
        <div className="w-full lg:w-1/2 lg:ml-10">
          <div className="flex flex-col items-center lg:items-start lg:mt-16">
            <h1 className="text-3xl font-thin tracking-tight text-center lg:text-8xl pb-4">
              Hello, I’m Tiara!
            </h1>
            <span className="bg-gradient-to-r from-indigo-600 via-purple-500 to-teal-400 bg-clip-text text-3xl tracking-tight text-transparent text-center lg:text-left">
              Frontend Developer & UI/UX Designer
            </span>
            <p className="my-4 max-w-xl py-4 text-base font-medium tracking-wide text-center lg:text-left lg:py-6 -mt-1">
              {HERO_CONTENT}
            </p>
          </div>
        </div>
        <div className="w-full lg:w-1/2 lg:p-8 flex justify-center lg:justify-end">
          <img
            src={profilePic}
            alt="Tiara Pasha R"
            className="rounded-lg object-cover"
            style={{ width: "500px", height: "500px" }} // Custom size for larger display
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
