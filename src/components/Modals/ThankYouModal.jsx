import Check from "../../assets/icons/icon-check.svg";
import { checkVariants, fadeinY, modalVariants2 } from "../../utils/animatedVariants";
import AnimatedComponent from "../AnimatedComponents/AnimatedComponent";

export default function ThankYouModal({ closeModal }) {
  return (
    <AnimatedComponent
      variants={modalVariants2}
      className="modal left-0 right-0 top-[9.5rem] pb-5 pt-[1.92rem] text-center md:max-w-[33.5rem] md:pb-10 md:pt-11">
      <AnimatedComponent tag="img" variants={checkVariants} src={Check} alt="" className="mx-auto w-24" />
      <AnimatedComponent variants={fadeinY(1.8)} initial="initial" animate="animate">
        <div>
          <h2 className="py-5 text-lg md:pt-10 md:text-2xl">Thanks for your support!</h2>
          <p className="pb-5 pt-0.5 md:pt-0 md:leading-7">
            Your pledge brings us one step closer to sharing Mastercraft Bamboo Monitor Riser worldwide. You
            will get an email once our campaign is completed.
          </p>
        </div>
        <button className="btn my-3 px-9 py-3 font-medium" onClick={closeModal}>
          Got it!
        </button>
      </AnimatedComponent>
    </AnimatedComponent>
  );
}
