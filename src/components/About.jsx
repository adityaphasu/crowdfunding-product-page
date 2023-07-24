import pledges from "../data/pledges.json";
import TriggerModalButton from "../components/Buttons/TriggerModalButton";
export default function About({ toggleModal }) {
  return (
    <section className="section my-7 px-6 pb-4 pt-[2.1rem] text-left lg:px-12 lg:pb-6 lg:pt-[2.6rem]">
      <div className="leading-6 lg:leading-[1.85rem]">
        <h2 className="text-[1.15rem] lg:text-xl">About this project</h2>
        <p className="py-6 lg:py-[2.1rem]">
          The Mastercraft Bamboo Monitor Riser is a sturdy and stylish platform that elevates your screen to a
          more comfortable viewing height. Placing your monitor at eye level has the potential to improve your
          posture and make you more comfortable while at work, helping you stay focused on the task at hand.
        </p>
        <p>
          Featuring artisan craftsmanship, the simplicity of design creates extra desk space below your
          computer to allow notepads, pens, and USB sticks to be stored under the stand.
        </p>
      </div>
      <div className="pt-9 lg:pt-10">
        {pledges.map((pledge, index) => (
          <div
            key={pledge.id}
            className={`mb-[1.6rem] rounded-lg border border-slate-300 px-[1.4rem] pb-1 pt-5 lg:px-[1.9rem] lg:pb-6 lg:pt-8
            ${index === 2 ? "opacity-50" : ""}`}>
            <div className="md:flex md:items-center md:justify-between">
              <h3 className="md:text-lg">{pledge.heading}</h3>
              <p className="py-1.5 font-medium text-moderate-cyan lg:py-1 lg:text-[0.95rem]">
                Pledge ${pledge.amount} or more
              </p>
            </div>
            <p className="py-4 leading-6 lg:pt-5 lg:leading-[1.8rem]">{pledge.text}</p>
            <div className="md:flex md:justify-between md:pt-1">
              <div className="flex items-center py-0.5">
                <strong className="text-[2rem]">{pledge.numbersLeft}</strong>
                <span className="ml-2">left</span>
              </div>
              <div className="py-[1.1rem] lg:py-1.5">
                {pledge.left === true ? (
                  <TriggerModalButton
                    text="Select Reward"
                    toggleModal={toggleModal}
                    className="bg-moderate-cyan px-[1.8rem] py-3.5 transition hover:bg-dark-cyan lg:py-3"
                  />
                ) : (
                  <TriggerModalButton
                    text="Out of Stock"
                    toggleModal={toggleModal}
                    disabled={true}
                    className="mt-0.5 bg-dark-gray px-[2.1rem] py-3.5 lg:mt-0 lg:py-3"
                  />
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
