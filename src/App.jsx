import Navbar from "./component/navbar";
import Hero from "./component/hero";
import About from "./component/about";
import Technologies from "./component/skills";
// import Experience from "./component/experience";
import  Projects from "./component/project";
import Contact from "./component/contact";

const App = () => {
  return (
    <div>
      <div className="overflow-x-hidden antialiased selection:bg-white-900 selection:text-white-900">
        <div className="fixed top-0 -z-10 h-full w-full">
          <div className="absolute bottom-auto left-auto right-0 top-0 h-[500px] w-[500px] -translate-x-[30%] translate-y-[20%] rounded-full bg-[rgba(173,109,244,0.5)] opacity-50 blur-[80px]"></div>
          <div className="container mx-auto px-8"></div>
        </div>
        <Navbar />
        <Hero />
        <About />
        <Technologies />
        {/* <Experience /> */}
        <Projects/>
        <Contact/>
      </div>
    </div>
  );
};

export default App;
