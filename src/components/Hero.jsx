import styles from "./Hero.module.css";

function Hero() {
  return (
    <section className={styles.hero}>
      <h1 className="text-4xl text-white text-center font-semibold mb-4 leading-tight sm:text-6xl sm:mb-6">
        A modern publishing platform
      </h1>
      <p className="text-center text-white max-w-[30ch] mx-auto mb-8 text-lg sm:max-w-none sm:text-xl sm:mb-12">
        Grow your audience and build your online brand
      </p>
      <div className="flex gap-4 items-center justify-center">
        <button className="bg-white py-3 px-4 rounded-full font-semibold text-gr-light-red hover:text-white duration-300 hover:bg-[#FF7B86]">
          Start for Free
        </button>
        <button className="border border-white rounded-full py-3 px-4 text-white font-semibold hover:bg-white hover:text-gr-light-red duration-300">
          Learn More
        </button>
      </div>
    </section>
  );
}

export default Hero;
