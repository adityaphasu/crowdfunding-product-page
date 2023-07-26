import { motion, useReducedMotion } from "framer-motion";

export default function AnimatedComponent({ tag = "section", variants, animateInView, ...props }) {
  const MotionTag = motion[tag];
  const prefersReducedMotion = useReducedMotion();

  const shouldAnimate = prefersReducedMotion ? "" : variants;
  const inView = animateInView ? "whileInView" : "animate";

  return (
    <MotionTag
      initial="initial"
      {...{ [inView]: "animate" }}
      exit="exit"
      variants={shouldAnimate}
      viewport={{ once: true, threshold: 0.8 }}
      {...props}></MotionTag>
  );
}
