import { useContext, useState } from "react";
import { AnimatePresence } from "framer-motion";
import About from "../components/About";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Progress from "../components/Progress";
import PledgeModal from "../components/Modals/PledgeModal";
import ThankYouModal from "../components/Modals/ThankYouModal";
import { AppContext } from "../Contexts/AppContext";

export default function Home() {
  const { pledgeModal, thankYouModal } = useContext(AppContext);

  return (
    <>
      {/* Overlay when modal opens*/}
      {(pledgeModal || thankYouModal) && (
        <div className="fixed left-0 top-0 z-20 h-full w-full bg-black opacity-50"></div>
      )}
      <Header />
      <main className="relative m-auto -my-[3.75rem] px-6 pb-9 text-center md:max-w-2xl lg:-my-44 lg:max-w-[48.5rem] lg:pb-24 xl:-my-[5.65rem]">
        <Hero />
        <Progress />
        {/* Pledge Modal */}
        <AnimatePresence>{pledgeModal && <PledgeModal />}</AnimatePresence>
        {/* Thankyou Modal */}
        <AnimatePresence mode="wait">{thankYouModal && <ThankYouModal />}</AnimatePresence>
        <About />
      </main>
    </>
  );
}
