import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import About from "../components/About";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Progress from "../components/Progress";
import PledgeModal from "../components/Modals/PledgeModal";
import ThankYouModal from "../components/Modals/ThankYouModal";

export default function Home() {
  // Progress bar states
  const [backers, setBackers] = useState(5007);
  const [money, setMoney] = useState(89914);

  // Modal States
  const [pledgeModal, setPledgeModal] = useState(false);
  const [thankYouModal, setThankYouModal] = useState(false);

  // Function for toggling the modals
  const toggleModal = (modal) => {
    if (modal === "pledge") {
      setPledgeModal(!pledgeModal);
      window.scrollTo({ top: 75, behavior: "smooth" });
    } else if (modal === "success") {
      setThankYouModal(!thankYouModal);
    }
  };

  return (
    <>
      {/* Overlay when modal opens*/}
      {(pledgeModal || thankYouModal) && (
        <div className="fixed left-0 top-0 z-20 h-full w-full bg-black opacity-50"></div>
      )}
      <Header />
      <main className="relative m-auto -my-[3.75rem] px-6 pb-9 text-center md:max-w-2xl lg:-my-44 lg:max-w-[48.5rem] lg:pb-24 xl:-my-[5.65rem]">
        <Hero toggleModal={() => toggleModal("pledge")} />
        <Progress backers={backers} money={money} />
        {/* Pledge Modal */}
        <AnimatePresence>
          {pledgeModal && (
            <PledgeModal
              closeModal={() => setPledgeModal(false)}
              toggleThankYouModal={() => toggleModal("success")}
              setBackers={setBackers}
              setMoney={setMoney}
            />
          )}
        </AnimatePresence>
        {/* Thankyou Modal */}
        <AnimatePresence mode="wait">
          {thankYouModal && <ThankYouModal closeModal={() => setThankYouModal(false)} />}
        </AnimatePresence>
        <About toggleModal={() => toggleModal("pledge")} />
      </main>
    </>
  );
}
