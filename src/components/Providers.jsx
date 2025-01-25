"use client";

import { AppProgressBar as ProgressBar } from "next-nprogress-bar";
import { ThemeProvider } from "next-themes";
import Header from "./Header";
import Profile from "./Profile";
import MainContent from "./MainContent";
import NavigationMenu from "./NavigationMenu";

const Providers = ({ children }) => {
  return (
    <body
      className={`bg-[url('/assets/img/bg/blurry-gradient-haikei.png')] dark:bg-[url('/assets/img/bg/blurry-gradient-dark-haikei.png')] bg-cover bg-fixed`}
    >
      <ThemeProvider attribute="class">
        <div className="mx-auto p-4 md:p-4 container">
          <Header />
          <div className="flex lg:flex-row flex-col justify-between gap-6 mt-48 w-full h-full">
            {/* Left section  */}
            <section className="lg:top-40 lg:sticky flex w-full lg:w-3/12 h-full">
              <Profile />
            </section>

            {/* Center section  */}
            <section className="flex w-full lg:w-8/12 overflow-hidden">
              <MainContent>
                {children}
                <ProgressBar
                  height="4px"
                  color="#0D74CE"
                  options={{ showSpinner: false }}
                  shallowRouting
                />
              </MainContent>
            </section>

            {/* Right section  */}
            <section className="lg:block hidden lg:w-[144px]">
              <NavigationMenu />
            </section>
          </div>
        </div>
          <Buy/>
      </ThemeProvider>
    </body>
  );
};

export default Providers;
