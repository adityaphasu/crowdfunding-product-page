import { motion } from "framer-motion";
import { buttonVariants } from "../../utils/animatedVariants";
import { useContext } from "react";
import { AppContext } from "../../Contexts/AppContext";

export default function TriggerModalButton({ text, className, disabled }) {
  const { toggleModal } = useContext(AppContext);

  return (
    <motion.button
      whileTap="tap"
      whileHover="hover"
      variants={buttonVariants}
      onClick={() => toggleModal("pledge")}
      disabled={disabled}
      className={`${className} rounded-full text-[0.88rem] font-bold tracking-[0.04em] text-white`}>
      {text}
    </motion.button>
  );
}
