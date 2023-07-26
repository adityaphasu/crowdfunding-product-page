import { createContext, useState } from "react";

const AppContext = createContext();

const AppContextProvider = ({ children }) => {
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

  const values = {
    backers,
    setBackers,
    money,
    setMoney,
    pledgeModal,
    thankYouModal,
    setPledgeModal,
    setThankYouModal,
    toggleModal,
  };

  return <AppContext.Provider value={values}>{children}</AppContext.Provider>;
};

export { AppContext, AppContextProvider };
