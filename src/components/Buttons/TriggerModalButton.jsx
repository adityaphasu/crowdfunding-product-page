import { motion } from "framer-motion";
import { buttonVariants } from "../../utils/animatedVariants";

export default function TriggerModalButton({ text, className, disabled, toggleModal }) {
  return (
    <motion.button
      whileTap="tap"
      whileHover="hover"
      variants={buttonVariants}
      onClick={toggleModal}
      disabled={disabled}
      className={`${className} rounded-full text-[0.88rem] font-bold tracking-[0.04em] text-white`}>
      {text}
    </motion.button>
  );
}
