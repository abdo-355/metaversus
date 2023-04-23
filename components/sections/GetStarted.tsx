"use client";

import { motion } from "framer-motion";
import Image from "next/image";

import { staggerContainer, fadeIn, planetVariants } from "@/utils/motion";
import { StartSteps, TitleText, TypingText } from "@/components"
import { startingFeatures } from "@/constants";

const GetStarted = () => (
  <section className="sm:p-16 xs:p-8 px-6 py-12 relative z-10">
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className="2xl:max-w-[1280px] w-full mx-auto flex lg:flex-row flex-col gap-8"
    >
      <motion.div
        variants={planetVariants("left")}
        className="flex-1 flex justify-center items-center"
      >
        <Image
          src="/get-started.png"
          alt="get started"
          width={800}
          height={800}
          className="w-[90%] h-[90%] object-contain"
        />
      </motion.div>
      <motion.div
        variants={fadeIn("left", "tween", 0.2, 1)}
        className="flex-[0.75] flex justify-center flex-col"
      >
        <TypingText title="| How Metaversus Works" />
        <TitleText title={<>Get started with just a few clicks</>} />
        <div className="mt-[31px] flex flex-col max-w-[370px] gap-[24px]">
          {startingFeatures.map((feature, index) =>
            <StartSteps
              key={feature}
              number={index + 1}
              text={feature}
            />
          )}
        </div>
      </motion.div>
    </motion.div>
  </section>
);

export default GetStarted;
