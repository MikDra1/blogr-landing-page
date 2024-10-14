function Footer() {
  return (
    <footer className="bg-footerBg text-white flex flex-col items-center text-center pt-20 pb-8 rounded-tr-[6rem] mt-24 md:flex-row md:items-start md:justify-between md:pl-[12%] md:pr-[25%] md:text-start md:mt-64">
      <img src="./images/logo.svg" alt="" className="mb-16" />
      <div className="mb-8">
        <h4 className="font-medium text-lg mb-4">Product</h4>
        <p className="cursor-pointer text-grayish-blue mb-1 md:mb-2 hover:underline">
          Overview
        </p>
        <p className="cursor-pointer text-grayish-blue mb-1 md:mb-2 hover:underline">
          Pricing
        </p>
        <p className="cursor-pointer text-grayish-blue mb-1 md:mb-2 hover:underline">
          Marketplace
        </p>
        <p className="cursor-pointer text-grayish-blue mb-1 md:mb-2 hover:underline">
          Features
        </p>
        <p className="cursor-pointer text-grayish-blue mb-1 md:mb-2 hover:underline">
          Integrations
        </p>
      </div>

      <div className="mb-8">
        <h4 className="font-medium text-lg mb-4">Company</h4>
        <p className="cursor-pointer text-grayish-blue mb-1 md:mb-2 hover:underline">
          About
        </p>
        <p className="cursor-pointer text-grayish-blue mb-1 md:mb-2 hover:underline">
          Team
        </p>
        <p className="cursor-pointer text-grayish-blue mb-1 md:mb-2 hover:underline">
          Blog
        </p>
        <p className="cursor-pointer text-grayish-blue mb-1 md:mb-2 hover:underline">
          Careers
        </p>
      </div>

      <div className="mb-8">
        <h4 className="font-medium text-lg mb-4">Connect</h4>
        <p className="cursor-pointer text-grayish-blue mb-1 md:mb-2 hover:underline">
          Contact
        </p>
        <p className="cursor-pointer text-grayish-blue mb-1 md:mb-2 hover:underline">
          Newsletter
        </p>
        <p className="cursor-pointer text-grayish-blue mb-1 md:mb-2 hover:underline">
          LinkedIn
        </p>
      </div>
    </footer>
  );
}

export default Footer;
