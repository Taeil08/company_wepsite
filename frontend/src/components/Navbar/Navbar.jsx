import React, { useState } from "react";
import { Link } from "react-router-dom";
import { HiMenu, HiX } from "react-icons/hi";
import { Listbox } from "@headlessui/react";

const menuItems = [
  { path: "/", label: "홈" },
  { path: "/about", label: "회사 정보" },
  { path: "/leadership", label: "임원 소개" },
  { path: "/board", label: "업무 게시판" },
  { path: "/our-services", label: "제공 기술" },
  { path: "/contact", label: "문의하기" },
];

const languageOptions = [
  { code: "ko", label: "한국어" },
  { code: "en", label: "영어" },
];

const MenuItem = ({ path, label, onClick }) => (
  <li>
    <Link
      to={path}
      className="hover:text-blue-300 transition duration-300"
      onClick={onClick}
    >
      {label}
    </Link>
  </li>
);

const LanguageSelector = ({ selected, onChange, className }) => (
  <Listbox value={selected} onChange={onChange}>
    <div className={`relative ${className}`}>
      <Listbox.Button className="w-full border rounded-md px-3 py-1 bg-white hover:border-blue-500 transition duration-300 text-left">
        {languageOptions.find((lang) => lang.code === selected)?.label}
      </Listbox.Button>
      <Listbox.Options className="absolute mt-1 w-full border rounded bg-white shadow-lg z-10">
        {languageOptions.map((lang) => (
          <Listbox.Option
            key={lang.code}
            value={lang.code}
            className={({ active }) =>
              `px-3 py-1 cursor-pointer ${active ? "bg-blue-100" : "bg-white"}`
            }
          >
            {lang.label}
          </Listbox.Option>
        ))}
      </Listbox.Options>
    </div>
  </Listbox>
);

const Navbar = () => {
  const [language, setLanguage] = useState("ko");
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="fixed top-0 left-0 w-full bg-white text-black p-4 shadow-lg z-50">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-xl lg:text-2xl font-bold lg:ml-12 lg:mr-8">
          <a href="/">ABC company</a>
        </h1>

        <div className="hidden lg:flex justify-center lg:flex-1">
          <ul className="flex gap-8 text-lg">
            {menuItems.map((item) => (
              <MenuItem key={item.path} {...item} />
            ))}
          </ul>
        </div>
        <div className="hidden lg:block ml-8 w-32">
          <LanguageSelector selected={language} onChange={setLanguage} />
        </div>
        <button
          onClick={toggleMenu}
          className="lg:hidden text-2xl"
          aria-label="메뉴"
        >
          {isOpen ? <HiX /> : <HiMenu />}
        </button>
      </div>

      <div
        className={`fixed top-0 right-0 h-full w-64 bg-white text-black transform transition-transform duration-300 ease-in-out z-50 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        } lg:hidden`}
      >
        <div className="p-4">
          <button
            className="text-2xl mb-8 float-right"
            onClick={toggleMenu}
            aria-label="닫기"
          >
            <HiX />
          </button>

          <ul className="clear-both space-y-4 pt-8 text-lg">
            {menuItems.map((item) => (
              <MenuItem
                key={item.path}
                {...item}
                onClick={() => {
                  setIsOpen(false);
                  window.scrollTo({ top: 0, behavior: "smooth" });
                }}
              />
            ))}
          </ul>
          <div className="mt-6 w-full">
            <LanguageSelector selected={language} onChange={setLanguage} />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
