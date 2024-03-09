import React from "react";
import Link from "next/link";
import Item from "../assets/nav1.png";

const SubNav = () => {
  const mainHead = [
    { head: "Fashion", link: "/" },
    { head: "Skin Care", link: "/" },
    { head: "Grocery", link: "/" },
    { head: "Mobiles", link: "/" },
    { head: "Electronics", link: "/" },
    { head: "Appliances", link: "/" },
    { head: "Furnitures", link: "/" },
  ];
  return (
    <div className="carousel rounded-box">
      <div className="carousel-item">
        <ul className="menu menu-horizontal ">
          {mainHead.map((head, key) => {
            return (
              <>
                <li className="flex justify-center align-middle p-5" key={key}>
                  <div>
                    <Link href={head.link}>
                      <div>
                        <img
                          src={Item}
                          className="w-16 h-10"
                          alt="Nav Item"
                        ></img>
                      </div>
                      <div>{head.head}</div>
                    </Link>
                  </div>
                </li>
              </>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default SubNav;
