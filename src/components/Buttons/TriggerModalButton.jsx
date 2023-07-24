export default function TriggerModalButton({ text, className, disabled, toggleModal }) {
  return (
    <>
      <button
        onClick={toggleModal}
        disabled={disabled}
        className={`${className} rounded-full text-[0.88rem] font-bold tracking-[0.04em] text-white`}>
        {text}
      </button>
    </>
  );
}
