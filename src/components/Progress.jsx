export default function Progress({ backers, money }) {
  return (
    <section className="section my-7 px-6 pb-9 md:px-11 md:pb-11 md:pt-6">
      <h2 className="sr-only">Progress</h2>
      <div className=" flex flex-col  pb-[1.6rem] pt-7 md:flex-row md:gap-11">
        <div className="wrapper">
          <p className="flexed-progress">
            <span className="big-black">
              <strong>${money.toLocaleString()}</strong>
            </span>
            of $100,000 backed
          </p>
        </div>
        <div className="wrapper mx-24 border-y-2 border-y-gray-200 pt-5 md:mx-0 md:border-x-2 md:border-y-0 md:border-x-gray-200 md:px-11 md:pt-0">
          <p className="flexed-progress">
            <span className="big-black">
              <strong>{backers.toLocaleString()}</strong>
            </span>
            total backers
          </p>
        </div>
        <p className="flexed-progress gap-0.5 pt-6 md:gap-2.5 md:pl-12 md:pt-0">
          <span className="big-black">
            <strong>56</strong>
          </span>
          days left
        </p>
      </div>
      <div className="my-1 h-3 rounded-full bg-slate-100 lg:mt-2">
        <div className="h-3 w-[78%] rounded-full bg-moderate-cyan"></div>
      </div>
    </section>
  );
}
