import Logo from "../assets/logo-mastercraft.svg";
import Bookmark from "../assets/icons/icon-bookmark.svg";
import Bookmarked from "../assets/icons/icon-bookmarked.svg";
import TriggerModalButton from "../components/Buttons/TriggerModalButton";
import { useState } from "react";

export default function Hero({ toggleModal }) {
  const [bookmark, setBookmark] = useState(false);

  const toggleBookmark = () => {
    setBookmark(!bookmark);
  };

  return (
    <section className="section">
      <div className=" px-[1.35rem] pb-8 lg:pb-5">
        <img src={Logo} alt="Mastercraft" width="56" height="56" className="m-auto -translate-y-7" />
        <h1 className="-mt-1 px-6 text-xl leading-[1.2] lg:mt-0 lg:text-[1.75rem]">
          Mastercraft Bamboo Monitor Riser
        </h1>
        <p className="py-4 leading-[1.55rem] lg:py-3">
          A beautiful & handcrafted monitor stand to reduce neck and eye strain.
        </p>
        <div className="flex gap-2 py-1.5 md:justify-between md:px-6 md:py-[1.65rem]">
          <TriggerModalButton
            text="Back this project"
            className="bg-moderate-cyan px-[3.1rem] transition hover:bg-dark-cyan lg:px-11"
            toggleModal={toggleModal}
          />
          <button
            className="rounded-full hover:opacity-70 md:flex md:items-center md:gap-4 md:bg-gray-100"
            onClick={toggleBookmark}
            aria-label="Bookmark Button">
            <img src={bookmark ? Bookmarked : Bookmark} alt="" width="56" height="56" className="filter" />
            <span
              className={`hidden font-bold md:block md:pr-6 
              ${bookmark ? "text-moderate-cyan" : "text-dark-gray"}`}>
              {bookmark ? "Bookmarked" : "Bookmark"}
            </span>
          </button>
        </div>
      </div>
    </section>
  );
}
