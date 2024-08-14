"use client";
import Link from "next/link";
import { useState, useEffect } from "react";

const Header = () => {
  const navLinks = [
    { displayName: "Services", id: "#services" },
    { displayName: "Contact Us", id: "#book-appointment" },
    { displayName: "About Us", id: "#about-us" },
    { displayName: "Testimonials", id: "#testimonials" },
  ];
  const [mobile, setMobile] = useState(false);

  const handleWindowSizeChange = () => {
    setMobile(window.innerWidth <= 767);
  };
  const [isClient, setIsClient] = useState(false);
  useEffect(() => setIsClient(true), []);
  useEffect(() => {
    if (isClient) {
      setMobile(window.innerWidth <= 767)
      window.addEventListener("resize", handleWindowSizeChange);
      return () => {
        window.removeEventListener("resize", handleWindowSizeChange);
      };
    }
  }, [isClient]);
  return (
    <div className="h-20 bg-gradient-to-r from-[#528478] to-[#5C968A] grid grid-rows-1 grid-cols-3 text-white px-16">
      {/* <div className="h-20 bg-gradient-to-r from-[#528478] to-[#5C968A] flex justify-between items-center text-white"> */}
      <div className="col-span-1">Logo</div>
      {!mobile && (
        <div className="col-span-2 flex justify-between items-center">
          {navLinks.map((linkItem, i) => {
            return (
              <Link href={linkItem.id} key={i}>
                {linkItem.displayName}
              </Link>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default Header;
