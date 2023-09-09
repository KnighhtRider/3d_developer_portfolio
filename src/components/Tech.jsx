import React from "react";

import { motion } from "framer-motion";  
import { styles } from "../styles";
import { BallCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";

const Tech = () => {

  const icons = Object.values(technologies).map((technology) => technology.icon);

  return (
    <>
      <motion.div variants={textVariant()}>
      <p className={`${styles.sectionSubText} `}>My skills</p>
          <h2 className={`${styles.sectionHeadText}`}>
        TECHNOLOGIES.
        </h2>
      </motion.div>
      <div className='w-full h-[75vh] mx-auto'>
            <BallCanvas icons={icons} />
      </div>
    </>
  );
};

export default SectionWrapper(Tech, "");
