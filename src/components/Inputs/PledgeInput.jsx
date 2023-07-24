import ContinueButton from "../Buttons/ContinueButton";

export default function PledgeInput({ amount, setPledgeAmount, errorText, setErrorText, handleContinue }) {
  return (
    <div className="flex flex-col justify-center border-t-2 border-gray-300 pb-2 pt-5 text-center md:flex-row md:items-center md:justify-between md:px-5 md:pb-1 md:pt-2">
      <p>Enter your pledge</p>
      <div className="relative">
        <div className="relative flex items-center justify-center gap-5 py-4">
          <label htmlFor="amount" className="relative">
            <span className="dollar relative">
              <input
                type="number"
                name="amount"
                id="amount"
                min="0"
                value={amount}
                onChange={(e) => {
                  setPledgeAmount(e.target.value);
                  setErrorText(false);
                }}
                className={`inline-block w-24 rounded-full border bg-transparent py-2 pl-8 pr-4 font-bold text-black outline-moderate-cyan
                ${errorText ? "border-red-500" : "border-gray-300"}`}
              />
            </span>
          </label>
          <ContinueButton onClick={handleContinue} />
        </div>
        {errorText && <p className="absolute bottom-0 left-2 text-xs text-red-600 md:left-2">{errorText}</p>}
      </div>
    </div>
  );
}
