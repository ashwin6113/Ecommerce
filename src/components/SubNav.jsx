import React from "react";
import Link from "next/link";
import Image from "next/image";
import Item1 from "../assets/nav1.png";
import Item2 from "../assets/nav1.png";
import Item3 from "../assets/grocery.png";
import Item4 from "../assets/mobiles.webp";
import Item5 from "../assets/electronics.webp";
import Item6 from "../assets/appliances.jpg";
import Item7 from "../assets/furnitures.jpg";

const SubNav = () => {
  const mainHead = [
    {
      head: "Fashion",
      src: Item1,
      subhead: [
        {
          name: "Men's",
          section: [
            { name: "Men's Shirts", link: "/" },
            { name: "Men's T-Shirts", link: "/" },
            { name: "Men's Pants", link: "/" },
            { name: "Essentials", link: "/" },
          ],
        },
        {
          name: "Women's",
          section: [
            { name: "Men's Shirts", link: "/" },
            { name: "Men's T-Shirts", link: "/" },
            { name: "Men's Pants", link: "/" },
            { name: "Essentials", link: "/" },
          ],
        },
        {
          name: "Kids",
          section: [
            { name: "Men's Shirts", link: "/" },
            { name: "Men's T-Shirts", link: "/" },
            { name: "Men's Pants", link: "/" },
            { name: "Essentials", link: "/" },
          ],
        },
        {
          name: "Essentials",
          section: [
            { name: "Men's Inners", link: "/" },
            { name: "Womens Inners", link: "/" },
            { name: "Men's Pants", link: "/" },
            { name: "Essentials", link: "/" },
          ],
        },
      ],
    },
    {
      head: "Skin Care",
      src: Item2,
      subhead: [
        {
          name: "Men's",
          section: [
            { name: "Men's Shirts", link: "/" },
            { name: "Men's T-Shirts", link: "/" },
            { name: "Men's Pants", link: "/" },
            { name: "Essentials", link: "/" },
          ],
        },
        {
          name: "Women's",
          section: [
            { name: "Men's Shirts", link: "/" },
            { name: "Men's T-Shirts", link: "/" },
            { name: "Men's Pants", link: "/" },
            { name: "Essentials", link: "/" },
          ],
        },
        {
          name: "Kids",
          section: [
            { name: "Men's Shirts", link: "/" },
            { name: "Men's T-Shirts", link: "/" },
            { name: "Men's Pants", link: "/" },
            { name: "Essentials", link: "/" },
          ],
        },
        {
          name: "Essentials",
          section: [
            { name: "Men's Inners", link: "/" },
            { name: "Womens Inners", link: "/" },
            { name: "Men's Pants", link: "/" },
            { name: "Essentials", link: "/" },
          ],
        },
      ],
    },
    {
      head: "Grocery",
      src: Item3,
      subhead: [
        {
          name: "Men's",
          section: [
            { name: "Men's Shirts", link: "/" },
            { name: "Men's T-Shirts", link: "/" },
            { name: "Men's Pants", link: "/" },
            { name: "Essentials", link: "/" },
          ],
        },
        {
          name: "Women's",
          section: [
            { name: "Men's Shirts", link: "/" },
            { name: "Men's T-Shirts", link: "/" },
            { name: "Men's Pants", link: "/" },
            { name: "Essentials", link: "/" },
          ],
        },
        {
          name: "Kids",
          section: [
            { name: "Men's Shirts", link: "/" },
            { name: "Men's T-Shirts", link: "/" },
            { name: "Men's Pants", link: "/" },
            { name: "Essentials", link: "/" },
          ],
        },
        {
          name: "Essentials",
          section: [
            { name: "Men's Inners", link: "/" },
            { name: "Womens Inners", link: "/" },
            { name: "Men's Pants", link: "/" },
            { name: "Essentials", link: "/" },
          ],
        },
      ],
    },
    {
      head: "Mobiles",
      src: Item4,
      subhead: [
        {
          name: "Men's",
          section: [
            { name: "Men's Shirts", link: "/" },
            { name: "Men's T-Shirts", link: "/" },
            { name: "Men's Pants", link: "/" },
            { name: "Essentials", link: "/" },
          ],
        },
        {
          name: "Women's",
          section: [
            { name: "Men's Shirts", link: "/" },
            { name: "Men's T-Shirts", link: "/" },
            { name: "Men's Pants", link: "/" },
            { name: "Essentials", link: "/" },
          ],
        },
        {
          name: "Kids",
          section: [
            { name: "Men's Shirts", link: "/" },
            { name: "Men's T-Shirts", link: "/" },
            { name: "Men's Pants", link: "/" },
            { name: "Essentials", link: "/" },
          ],
        },
        {
          name: "Essentials",
          section: [
            { name: "Men's Inners", link: "/" },
            { name: "Womens Inners", link: "/" },
            { name: "Men's Pants", link: "/" },
            { name: "Essentials", link: "/" },
          ],
        },
      ],
    },
    {
      head: "Electronics",
      src: Item5,
      subhead: [
        {
          name: "Men's",
          section: [
            { name: "Men's Shirts", link: "/" },
            { name: "Men's T-Shirts", link: "/" },
            { name: "Men's Pants", link: "/" },
            { name: "Essentials", link: "/" },
          ],
        },
        {
          name: "Women's",
          section: [
            { name: "Men's Shirts", link: "/" },
            { name: "Men's T-Shirts", link: "/" },
            { name: "Men's Pants", link: "/" },
            { name: "Essentials", link: "/" },
          ],
        },
        {
          name: "Kids",
          section: [
            { name: "Men's Shirts", link: "/" },
            { name: "Men's T-Shirts", link: "/" },
            { name: "Men's Pants", link: "/" },
            { section: "Essentials", link: "/" },
          ],
        },
        {
          name: "Essentials",
          section: [
            { name: "Men's Inners", link: "/" },
            { name: "Womens Inners", link: "/" },
            { name: "Men's Pants", link: "/" },
            { name: "Essentials", link: "/" },
          ],
        },
      ],
    },
    {
      head: "Appliances",
      src: Item6,
      subhead: [
        {
          name: "Men's",
          section: [
            { name: "Men's Shirts", link: "/" },
            { name: "Men's T-Shirts", link: "/" },
            { name: "Men's Pants", link: "/" },
            { name: "Essentials", link: "/" },
          ],
        },
        {
          name: "Women's",
          section: [
            { name: "Men's Shirts", link: "/" },
            { name: "Men's T-Shirts", link: "/" },
            { name: "Men's Pants", link: "/" },
            { name: "Essentials", link: "/" },
          ],
        },
        {
          name: "Kids",
          section: [
            { name: "Men's Shirts", link: "/" },
            { name: "Men's T-Shirts", link: "/" },
            { name: "Men's Pants", link: "/" },
            { name: "Essentials", link: "/" },
          ],
        },
        {
          name: "Essentials",
          section: [
            { name: "Men's Inners", link: "/" },
            { name: "Womens Inners", link: "/" },
            { name: "Men's Pants", link: "/" },
            { name: "Essentials", link: "/" },
          ],
        },
      ],
    },
    {
      head: "Furnitures",
      src: Item7,
      subhead: [
        {
          name: "Men's",
          section: [
            { name: "Men's Shirts", link: "/" },
            { name: "Men's T-Shirts", link: "/" },
            { name: "Men's Pants", link: "/" },
            { name: "Essentials", link: "/" },
          ],
        },
        {
          name: "Women's",
          section: [
            { name: "Men's Shirts", link: "/" },
            { name: "Men's T-Shirts", link: "/" },
            { name: "Men's Pants", link: "/" },
            { name: "Essentials", link: "/" },
          ],
        },
        {
          name: "Kids",
          section: [
            { name: "Men's Shirts", link: "/" },
            { name: "Men's T-Shirts", link: "/" },
            { name: "Men's Pants", link: "/" },
            { name: "Essentials", link: "/" },
          ],
        },
        {
          name: "Essentials",
          section: [
            { name: "Men's Inners", link: "/" },
            { name: "Womens Inners", link: "/" },
            { name: "Men's Pants", link: "/" },
            { name: "Essentials", link: "/" },
          ],
        },
      ],
    },
  ];
  return (
    <div className="flex flex-row justify-center align-middle gap-10">
      {mainHead.map((head, key) => {
        return (
          <div className="z-10" key={key}>
            <div className="dropdown lg:dropdown-hover">
              <div className="btn m-1 h-auto p-2">
                <div>
                  <div>
                    <Image
                      src={head.src}
                      className="w-16"
                      alt="Nav Item"
                    ></Image>
                  </div>
                  <div>{head.head}</div>
                </div>
              </div>
              <ul className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
                <li>
                  {head.subhead.map((SubHead, key) => {
                    return (
                      <details>
                        <summary>{SubHead.name}</summary>
                        {SubHead.section.map((Section, key) => {
                          return (
                            <ul className="w-auto p-2">
                              <li>
                                <Link href={Section.link}>{Section.name}</Link>
                              </li>
                            </ul>
                          );
                        })}
                      </details>
                    );
                  })}
                </li>
              </ul>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default SubNav;
