import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

import { styles } from "../styles";
import { EarthCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { slideIn, textVariant, fadeIn } from "../utils/motion";
import profilePhoto from '../assets/profile_photo.png'

const About2 = () => {


  return (
    <section className="relative w-full h-auto mx-auto">
      <div
        className={`${styles.paddingX} sm:pb-16 pb-6 max-w-7xl mx-auto flex items-start gap-5 pt-[120px]`}
      >
        <div
          className={`xl:mt-12 flex xl:flex-row flex-col-reverse justify-between align-center gap-10 w-full mx-auto`}
        >

          <div className="max-w-2xl z-10">
            <motion.h1
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className={`${styles.heroHeadText}`}
            >
              Hi, I'm Daisy Wen.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-lg text-white/90 mb-6 leading-relaxed"
            >
              I am a software engineer passionate about crafting modern, scalable web applications.

              From responsive UIs to backend APIs, I love solving real-world problems with clean and efficient code.

              Let's build something meaningful together!
            </motion.p>

            <div className="flex flex-wrap gap-3 mt-4">
              <motion.span
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                className="bg-tertiary text-white px-4 py-1 rounded-full text-sm shadow"
              >
                Fullstack Engineer
              </motion.span>
              <motion.span
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.6 }}
                className="bg-purple-600 text-white px-4 py-1 rounded-full text-sm shadow"
              >
                Frontend Engineer
              </motion.span>
              <motion.span
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1.2 }}
                className="bg-secondary  text-white px-4 py-1 rounded-full text-sm shadow"
              >
                Backend Engineer
              </motion.span>
            </div>
          </div>

          {/* Avatar */}
          <div className="flex items-center">
            <motion.div
              className="relative md:block"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
            >
              <motion.div
                className="relative w-40 h-40 rounded-full border-4 border-pink-300 overflow-hidden"
                whileHover={{
                  boxShadow: "0 0 20px rgba(255, 107, 157, 0.6), 0 0 60px rgba(255, 107, 157, 0.3)",
                }}
                transition={{ duration: 0.3 }}
              >
                <img
                  src={profilePhoto}
                  alt="Profile"
                  className="w-full h-full object-cover"
                />
              </motion.div>
            </motion.div>
          </div>


          {/* <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3 }}
            className="hidden md:block z-10"
          >
            <img
              src={profilePhoto}
              alt="Daisy Wen"
              className="w-60 h-60 rounded-full object-cover shadow-lg border-4 border-white"
            />
          </motion.div> */}



        </div>
      </div>
    </section>


  );
};

export default SectionWrapper(About2, "about2");
