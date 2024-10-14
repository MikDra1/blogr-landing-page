import { useState } from "react";
import styles from "./Navigation.module.css";
import { useBlogr } from "../contexts/BlogrProvider";
// import Button from "./Button";
// import Button from "./Button";

function Navigation() {
  const { isMobile } = useBlogr();
  const [imageUrl, setImageUrl] = useState("./images/icon-hamburger.svg");
  const isOpen = imageUrl === "./images/icon-close.svg";
  const [productOpen, setProductOpen] = useState(false);
  const [companyOpen, setCompanyOpen] = useState(false);
  const [connectOpen, setConnectOpen] = useState(false);

  function handleOpenNav() {
    setImageUrl((url) =>
      url === "./images/icon-hamburger.svg"
        ? "./images/icon-close.svg"
        : "./images/icon-hamburger.svg"
    );
  }

  return (
    <>
      {isMobile ? (
        <header
          className={`${styles.headerMobile} ${
            isOpen ? styles.positionFixed : ""
          }`}
        >
          <img src="./images/logo.svg" alt="" />
          <img src={imageUrl} alt="" onClick={handleOpenNav} />
          <div
            className={`${isOpen ? styles.mobileUlOpen : ""} ${
              styles.headerMobileUl
            }`}
          >
            <section className={styles.headerMobileUlContainer}>
              <div className="flex flex-col">
                <div
                  className="flex items-center gap-2 justify-center"
                  onClick={() => {
                    setCompanyOpen(false);
                    setProductOpen((v) => !v);
                    setConnectOpen(false);
                  }}
                >
                  <p
                    className={`text-black ${productOpen && "text-[#576372]"}`}
                  >
                    Product
                  </p>
                  <img
                    src="./images/icon-arrow-dark.svg"
                    alt=""
                    className={`${
                      productOpen ? "rotate-180" : ""
                    } duration-300`}
                  />
                </div>
                {productOpen && (
                  <div className=" bg-[#EFEFF1] text-grayish-blue p-6  space-y-2 rounded-xl text-center">
                    <p className="font-semibold ">Overview</p>
                    <p className="font-semibold">Pricing</p>
                    <p className="font-semibold">Marketplace</p>
                    <p className="font-semibold">Features</p>
                    <p className="font-semibold">Integrations</p>
                  </div>
                )}
              </div>

              <div className="flex flex-col ">
                <div
                  onClick={() => {
                    setCompanyOpen((v) => !v);
                    setProductOpen(false);
                    setConnectOpen(false);
                  }}
                  className="flex items-center gap-2 justify-center"
                >
                  <p
                    className={`text-black ${companyOpen && "text-[#576372]"}`}
                  >
                    Company
                  </p>
                  <img
                    src="./images/icon-arrow-dark.svg"
                    alt=""
                    className={`${
                      companyOpen ? "rotate-180" : ""
                    } duration-300`}
                  />
                </div>
                {companyOpen && (
                  <div className=" bg-[#EFEFF1] text-grayish-blue p-6  space-y-2 rounded-xl">
                    <p className="font-semibold">About</p>
                    <p className="font-semibold">Team</p>
                    <p className="font-semibold">Blog</p>
                    <p className="font-semibold">Careers</p>
                  </div>
                )}
              </div>

              <div className="flex flex-col">
                <div
                  onClick={() => {
                    setCompanyOpen(false);
                    setProductOpen(false);
                    setConnectOpen((v) => !v);
                  }}
                  className="flex items-center gap-2 justify-center"
                >
                  <p
                    className={`text-black ${connectOpen && "text-[#576372]"}`}
                  >
                    Connect
                  </p>
                  <img
                    src="./images/icon-arrow-dark.svg"
                    alt=""
                    className={`${
                      connectOpen ? "rotate-180" : ""
                    } duration-300`}
                  />
                </div>
                {connectOpen && (
                  <div className=" bg-[#EFEFF1] text-grayish-blue p-6  space-y-2 rounded-xl mb-0">
                    <p className="font-semibold">Contact</p>
                    <p className="font-semibold">Newsletter</p>
                    <p className="font-semibold">LinkedIn</p>
                  </div>
                )}
              </div>
            </section>

            <div className="mt-auto border-t w-11/12 grid justify-items-center pt-8 pb-4 mx-auto">
              <div
                className="text-lg
              "
              >
                Login
              </div>
              <button className="bg-gradient-to-l from-gr-very-light-red to-gr-light-red w-fit rounded-full px-10 py-3.5 text-white mt-8">
                Sign Up
              </button>
            </div>
          </div>
        </header>
      ) : (
        <header className={styles.headerDesktop}>
          <div className={styles.headerDesktopEnd}>
            <img src="./images/logo.svg" alt="" />
            <ul>
              <li>
                <div
                  onClick={() => {
                    setCompanyOpen(false);
                    setProductOpen((v) => !v);
                    setConnectOpen(false);
                  }}
                  className="flex items-center gap-2 relative"
                >
                  <p>Product</p>
                  <img
                    src="./images/icon-arrow-light.svg"
                    alt=""
                    className={`${
                      productOpen ? "rotate-180" : ""
                    } duration-300`}
                  />
                </div>
                {productOpen && (
                  <div className="absolute top-10 bg-white text-black p-6 w-48 left-0 -translate-x-1/4 space-y-2 shadow-lg rounded-xl">
                    <p className="hover:font-semibold duration-100">Overview</p>
                    <p className="hover:font-semibold duration-100">Pricing</p>
                    <p className="hover:font-semibold duration-100">
                      Marketplace
                    </p>
                    <p className="hover:font-semibold duration-100">Features</p>
                    <p className="hover:font-semibold duration-100">
                      Integrations
                    </p>
                  </div>
                )}
              </li>

              <li>
                <div
                  onClick={() => {
                    setCompanyOpen((v) => !v);
                    setProductOpen(false);
                    setConnectOpen(false);
                  }}
                  className="flex items-center gap-2 relative"
                >
                  <p>Company</p>
                  <img
                    src="./images/icon-arrow-light.svg"
                    alt=""
                    className={`${
                      companyOpen ? "rotate-180" : ""
                    } duration-300`}
                  />
                </div>
                {companyOpen && (
                  <div className="absolute top-10 bg-white text-black p-6 w-48 left-0 -translate-x-1/4 space-y-2 shadow-lg rounded-xl">
                    <p className="hover:font-semibold duration-100">About</p>
                    <p className="hover:font-semibold duration-100">Team</p>
                    <p className="hover:font-semibold duration-100">Blog</p>
                    <p className="hover:font-semibold duration-100">Careers</p>
                  </div>
                )}
              </li>

              <li>
                <div
                  onClick={() => {
                    setCompanyOpen(false);
                    setProductOpen(false);
                    setConnectOpen((v) => !v);
                  }}
                  className="flex items-center gap-2 relative"
                >
                  <p>Connect</p>
                  <img
                    src="./images/icon-arrow-light.svg"
                    alt=""
                    className={`${
                      connectOpen ? "rotate-180" : ""
                    } duration-300`}
                  />
                </div>
                {connectOpen && (
                  <div className="absolute top-10 bg-white text-black p-6 w-48 left-0 -translate-x-1/4 space-y-2 shadow-lg rounded-xl">
                    <p className="hover:font-semibold duration-100">Contact</p>
                    <p className="hover:font-semibold duration-100">
                      Newsletter
                    </p>
                    <p className="hover:font-semibold duration-100">LinkedIn</p>
                  </div>
                )}
              </li>
            </ul>
          </div>

          <div className="flex items-center gap-4">
            <ul>
              <li>Login</li>
            </ul>
            <button className="bg-white py-3 px-4 rounded-full font-semibold text-gr-light-red hover:text-white duration-300 hover:bg-[#FF7B86]">
              Sign Up
            </button>
          </div>
        </header>
      )}
    </>
  );
}

export default Navigation;
