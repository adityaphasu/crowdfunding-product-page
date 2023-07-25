import { motion, useReducedMotion } from "framer-motion";

export default function AnimatedLayout({ tag = "div", ...props }) {
  const MotionTag = motion[tag];
  const prefersReducedMotion = useReducedMotion();

  return <MotionTag layout={prefersReducedMotion ? false : true} {...props}></MotionTag>;
}
