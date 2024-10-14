function ArtSection() {
  return (
    <section
      className={`pt-52 pb-24 mb-16 relative  mt-64 art lg:mt-[16.25rem] lg:pt-28 lg:pb-32 lg:flex items-center 2xl:mt-80`}
    >
      <div className="-translate-y-1/2 -translate-x-1/2 absolute top-0 lg:translate-y-0 lg:-top-16 lg:left-0 xl:left-32 left-1/2 lg:-translate-x-0 w-full sm:w-auto">
        <img src="./images/illustration-phones.svg" alt="w-11/12" />
      </div>
      <div className="lg:pl-[52vw] lg:pr-48 mt-8 sm:mt-0 2xl:pl-[45vw] 2xl:pr-[27.5vw]">
        <h2 className="text-center text-4xl text-white mb-6 lg:text-start">
          State of the Art Infrastructure
        </h2>
        <p className="text-[#B5B6CA] text-center max-w-[35ch] mx-auto lg:text-start lg:max-w-none">
          With reliability and speed in mind, worldwide data centers provide the
          backbone for ultra-fast connectivity. This ensures your site will load
          instantly, no matter where your readers are, keeping your site
          competitive.
        </p>
      </div>
    </section>
  );
}

export default ArtSection;
