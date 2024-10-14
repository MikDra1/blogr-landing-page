function Future() {
  return (
    <section className="w-11/12 mx-auto mt-24 relative lg:mt-44 ">
      <h2 className="text-3xl font-medium text-center mb-8 md:mb-0 md:text-4xl ">
        Designed for the future
      </h2>
      <div className="lg:flex max-w-[80vw] mx-auto">
        <img
          src="./images/illustration-editor-mobile.svg"
          alt=""
          className="w-full lg:hidden"
        />
        <img
          src="./images/illustration-editor-desktop.svg"
          alt=""
          className=" max-w-[90%] hidden lg:block absolute -right-80 top-0 -translate-y-20"
        />
        <div className="xl:mt-16">
          <div className="mt-8 ">
            <h3 className="text-center font-medium text-3xl max-w-[15ch] mx-auto mb-4 lg:text-start lg:max-w-none lg:pr-[45vw]">
              Introducing an extensible editor
            </h3>
            <p className="text-center max-w-[34ch] mb-4 mx-auto text-text-primary lg:text-start lg:max-w-none lg:pr-[45vw]">
              Blogr features an exceedingly intuitive interface which lets you
              focus on one thing: creating content. The editor supports
              management of multiple blogs and allows easy manipulation of
              embeds such as images, videos, and Markdown. Extensibility with
              plugins and themes provide easy ways to add functionality or
              change the looks of a blog.
            </p>
          </div>

          <div className="mt-10 md:mt-28">
            <h3 className="text-center font-medium text-3xl max-w-[15ch] mx-auto mb-4 lg:text-start lg:max-w-none lg:pr-[45vw]">
              Robust content management
            </h3>
            <p className="text-center max-w-[34ch] mb-4 mx-auto text-text-primary lg:text-start lg:max-w-none lg:pr-[45vw]">
              Flexible content management enables users to easily move through
              posts. Increase the usability of your blog by adding customized
              categories, sections, format, or flow. With this functionality,
              you’re in full control.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Future;
