"use client";

import { textContainer, textVariant2 } from "@/utils/motion";
import { motion } from "framer-motion";

interface Props {
  title: string;
  styles: string
}

export const TypingText: React.FC<Props> = ({ title, styles }) => (
  <motion.p
    variants={textContainer}
    className={`font-normal text-[14px] text-secondary-white ${styles}`}
  >{Array.from(title).map((letter, index) =>
    <motion.span
      key={index}
      variants={textVariant2}
    >
      {letter === " " ? "\u00A0" : letter}
    </motion.span>
  )}</motion.p>
);

export const TitleText: React.FC<Props> = ({ title, styles }) => (
  <h2>Title Text</h2>
);
