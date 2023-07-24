import { useState } from "react";
import Close from "../../assets/icons/icon-close-modal.svg";
import pledgesData from "../../data/pledges.json";
import PledgeInput from "../Inputs/PledgeInput";
import CustomRadioInput from "../Inputs/CustomRadioInput";

export default function PledgeModal({ closeModal, toggleSuccessModal, setBackers, setMoney }) {
  const [selectedPledge, setSelectedPledge] = useState(null);
  const [pledgeAmount, setPledgeAmount] = useState("");
  const [errorText, setErrorText] = useState(false);

  //  Function for selection of radio inputs
  const handleRadio = (id) => {
    setSelectedPledge(id);
    setPledgeAmount("");
    setErrorText(false);
  };

  // Handle the continue button for PledgeInput
  const handleContinue = () => {
    // Find the selected pledge inside the json
    const pledge = pledgesData.find((pledge) => pledge.id === selectedPledge);
    console.log(pledge);

    // Check if user tries to continue with empty input or try to continue with $0
    if (!pledgeAmount || Number(pledgeAmount) <= 0) {
      setErrorText("Field is empty!");
      return;
    }
    // Check if user tries to continue with amount less than the minimum amount
    if (pledge && Number(pledgeAmount) < pledge.amount) {
      setErrorText(`Please enter $${pledge.amount} or more.`);
      return;
    }

    // Decrease the number of pledges left after continuing
    if (pledge) {
      pledge.numbersLeft = pledge.numbersLeft - 1;
    }

    // Increase backer value in progress component
    setBackers((value) => value + 1);
    // Increase the amount of money in progress component by the amount pledged
    setMoney((value) => value + Number(pledgeAmount));
    setErrorText(false);
    closeModal();
    toggleSuccessModal();
  };

  // Prevent form default
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <section className="modal -top-[7.75rem] pb-1 pt-[1.92rem] text-left md:max-w-[45.5rem] md:pt-[2.85rem]">
        <div className="relative flex justify-between">
          <h2 className="text-lg md:text-2xl">Back this project</h2>
          <button
            onClick={() => closeModal()}
            aria-label="Close Modal"
            className="md:absolute md:-right-5 md:-top-4">
            <img src={Close} alt="Close mark" className="filter-close transition-all" />
          </button>
        </div>
        <p className="py-[1.35rem] md:py-[1.2rem]">
          Want to support us in bringing Mastercraft Bamboo Monitor Riser out in the world?
        </p>
        <form action="#" onSubmit={handleSubmit} className="md:py-3">
          <div className={`pledge mb-5 md:mb-6 ${0 === selectedPledge ? "selected" : "not-selected"}`}>
            <div className="px-6 py-[2.1rem] md:px-[1.6rem]">
              <label htmlFor="pledge">
                <div className="flex gap-4 md:gap-6">
                  <CustomRadioInput id="pledge" handleRadio={() => handleRadio(0)} />
                  <h3 className="pb-2 transition duration-300 md:pb-0">Pledge with no reward</h3>
                </div>
                <p className="md-modal-text pt-[1.6rem] md:pt-4">
                  Choose to support us without a reward if you simply believe in our project. As a backer, you
                  will be signed up to receive product updates via email.
                </p>
              </label>
            </div>
            {selectedPledge === 0 && (
              <PledgeInput
                amount={pledgeAmount}
                setPledgeAmount={setPledgeAmount}
                errorText={errorText}
                setErrorText={setErrorText}
                handleContinue={handleContinue}
              />
            )}
          </div>
          {pledgesData.map((pledge, index) => (
            <div
              key={pledge.id}
              className={`pledge mb-[1.6rem] ${index === 2 ? "opacity-50" : ""} 
               ${pledge.id === selectedPledge ? "selected" : "not-selected"}`}>
              <div className="px-6 pb-6 pt-5 md:px-[1.6rem] md:pb-6 md:pt-7">
                <label htmlFor={`pledge${pledge.id}`}>
                  <div className="md:grid md:grid-cols-4 md:items-center">
                    <div className="flex items-center gap-4 md:col-span-3 md:gap-6">
                      <CustomRadioInput
                        id={`pledge${pledge.id}`}
                        handleRadio={() => handleRadio(pledge.id)}
                        disabled={index === 2 ? true : false}
                      />
                      <div className="md:flex md:gap-4">
                        <h3 className="pb-0.5 transition duration-300">{pledge.heading}</h3>
                        <p className="font-medium text-moderate-cyan"> Pledge ${pledge.amount} or more</p>
                      </div>
                    </div>
                    <p className="md-modal-text py-5 md:col-span-4 md:py-2 md:leading-7">{pledge.text}</p>
                    <div className="flex items-center py-0.5 md:col-start-4 md:row-start-1 md:justify-self-end">
                      <strong className="text-lg">{pledge.numbersLeft}</strong>
                      <span className="ml-2">left</span>
                    </div>
                  </div>
                </label>
              </div>
              {selectedPledge === pledge.id && (
                <PledgeInput
                  amount={pledgeAmount}
                  setPledgeAmount={setPledgeAmount}
                  errorText={errorText}
                  setErrorText={setErrorText}
                  handleContinue={handleContinue}
                />
              )}
            </div>
          ))}
        </form>
      </section>
    </>
  );
}
