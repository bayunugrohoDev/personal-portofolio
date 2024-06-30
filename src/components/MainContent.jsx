"use client";

import Footer from "./Footer";

const MainContent = ({ children }) => {
  return (
    <main className="border bg-white w-full rounded-xl py-10 px-8 shadow-sm flex flex-col gap-2 items-start dark:bg-black dark:border-black">
      <div className="lg:pt-[60px] lg:px-[60px] flex flex-col gap-6 w-full">
        {children}
        <Footer />
      </div>
    </main>
  );
};

export default MainContent;
