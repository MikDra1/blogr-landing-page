function Benefits() {
  return (
    <section>
      <div className="grid justify-items-center md:grid-cols-[1fr_1fr] items-center md:my-48">
        <img
          src="./images/illustration-laptop-mobile.svg"
          alt=""
          className="md:hidden"
        />

        <img
          src="./images/illustration-laptop-desktop.svg"
          alt=""
          className="hidden md:block -translate-x-[12.5vw] scale-125"
        />

        <div className="md:pr-56">
          <div>
            <h3 className="text-heading text-3xl font-semibold text-center mb-4 mt-8 md:text-start">
              Free, open, simple
            </h3>
            <p className="text-center text-text-primary px-5 md:text-start md:px-0">
              Blogr is a free and open source application backed by a large
              community of helpful developers. It supports features such as code
              syntax highlighting, RSS feeds, social media integration,
              third-party commenting tools, and works seamlessly with Google
              Analytics. The architecture is clean and is relatively easy to
              learn.
            </p>
          </div>

          <div className="w-full md:mt-28">
            <h3 className="text-heading text-3xl font-semibold text-center mb-4 mt-8 md:text-start">
              Powerful tooling
            </h3>
            <p className="text-center text-text-primary px-7 md:text-start md:px-0 ">
              Batteries included. We built a simple and straightforward CLI tool
              that makes customization and deployment a breeze, but capable of
              producing even the most complicated sites.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Benefits;
