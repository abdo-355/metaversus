"use client";

import { motion } from "framer-motion";
import Image from "next/image";

import { TitleText, TypingText, WorldAvatar, WorldCard } from "@/components";
import { staggerContainer, fadeIn } from "@/utils/motion";

const World = () => (
  <section className="sm:p-16 xs:p-8 px-6 py-12 relative z-10">
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className="2xl:max-w-[1280px] w-full mx-auto flex flex-col gap-8"
    >
      <TypingText title="| People on the World" styles="text-center" />
      <TitleText title={<>Track friends around you and invite them to play together in the same world</>} styles="text-center" />
      <motion.div
        variants={fadeIn("up", "tween", 0.3, 1)}
        className="relative mt-[68px] flex w-full lg:h-[550px] md:h-[400px] sm:h-[300px] h-[240px]"
      >
        <Image
          src="/map.png"
          alt="map"
          height={700}
          width={1250}
          className="w-full h-full object-contain"
        />
        <WorldAvatar id={1} position="lg:bottom-32 sm:bottom-12 bottom-8 lg:right-28 sm:right-16 right-8" />
        <WorldAvatar id={2} position="lg:top-28 sm:top-16 top-8 lg:left-28 sm:left-16 left-8" />
        <WorldAvatar id={3} position="top-1/2 left-[45%]" />
        <WorldCard id={2} position="lg:left-36 left-24 top-60" title="The Upside Down" />
        <WorldCard id={3} position="lg:right-80 right-44 lg:top-12 top-20" title="Kadirojo Permai" />
      </motion.div>
    </motion.div>
  </section>
);

export default World;
