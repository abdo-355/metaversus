"use client";

import { ReactNode, FC } from "react";

import { textContainer, textVariant2 } from "@/utils/motion";
import { motion } from "framer-motion";

interface Props {
  title: string | ReactNode;
  styles: string
}

export const TypingText: FC<Props> = ({ title, styles }) => (
  <motion.p
    variants={textContainer}
    className={`font-normal text-[14px] text-secondary-white ${styles}`}
  >{Array.from(title as string).map((letter, index) =>
    <motion.span
      key={index}
      variants={textVariant2}
    >
      {letter === " " ? "\u00A0" : letter}
    </motion.span>
  )}</motion.p>
);

export const TitleText: React.FC<Props> = ({ title, styles }) => (
  <motion.h2
    variants={textVariant2}
    initial="hidden"
    whileInView="show"
    className={`mt-[8px] font-bold md:text-[64px] text-[40px] text-white ${styles}`}
  >
    {title}
  </motion.h2>
);
