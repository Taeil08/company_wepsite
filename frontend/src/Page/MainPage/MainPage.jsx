import React from "react";
import Hero from "./Hero";
import Forum from "./Forum";
import Contact from "./Contact";

const MainPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-grow">
        <Hero />
        <Forum />
      </main>
      <Contact /> {/* footer나 contact처럼 맨 아래에 고정될 부분 */}
    </div>
  );
};

export default MainPage;
