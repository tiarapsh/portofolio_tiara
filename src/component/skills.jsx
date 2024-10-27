import { RiReactjsLine } from "react-icons/ri";
import { DiJavascript1 } from "react-icons/di";
import { RiNodejsLine } from "react-icons/ri";
import { SiPhp } from "react-icons/si";
import { FaJava } from "react-icons/fa"; 
import { SiFigma } from "react-icons/si";
import { motion } from "framer-motion";

const iconVariants = (duration) => ({
  initial: { y: -10 },
  animate: {
    y: [10, -10],
    transition: {
      duration: duration,
      ease: "linear",
      repeat: Infinity,
      repeatType: "reverse",
    },
  },
});

const Skill = () => {
  return (
    <div className="border-b border-neutral pb-10">
      <h1 className="my-20 text-center text-4xl font-bold text-purple-400">Skills</h1>
      <div className="flex flex-wrap items-center justify-center gap-6"> {/* Increased gap between boxes */}
        <motion.div
          variants={iconVariants(2.5)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-2 border-purple-400 p-5" // Increased padding
        >
          <RiReactjsLine className="text-5xl text-cyan-400" /> {/* Increased icon size */}
        </motion.div>
        <motion.div
          variants={iconVariants(3)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-2 border-purple-400 p-5"
        >
          <DiJavascript1 className="text-5xl text-yellow-400" />
        </motion.div>
        <motion.div
          variants={iconVariants(5)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-2 border-purple-300 p-5"
        >
          <RiNodejsLine className="text-5xl text-green-500" />
        </motion.div>
        <motion.div
          variants={iconVariants(2)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-2 border-purple-300 p-5"
        >
          <SiPhp className="text-5xl text-purple-400" />
        </motion.div>
        <motion.div
          variants={iconVariants(6)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-2 border-purple-300 p-5"
        >
          <FaJava className="text-5xl text-red-500" />
        </motion.div>
        <motion.div
          variants={iconVariants(4)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-2 border-purple-300 p-5"
        >
          <SiFigma className="text-5xl text-purple-800" />
        </motion.div>
      </div>
    </div>
  );
};

export default Skill;
