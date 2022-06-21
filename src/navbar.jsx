import React, { useState } from "react";
import { links, social } from "./data";
import { FaBars } from "react-icons/fa";
import { ImCross } from "react-icons/im";

const ull = (
    <div
        className={
            "md:hidden absolute bg-[bisque] w-full pl-3 pb-3 duration-500 ease-in"
        }
    >
        <ul className={"items-center"}>
            {links.map((data, index) => {
                return (
                    <li key={data.id}>
                        <a href={data.url}>{data.text}</a>
                    </li>
                );
            })}
        </ul>

        <ul className={"flex items-center"}>
            {social.map((data, index) => {
                return (
                    <li key={data.id}>
                        <a href={data.url}>{data.icon}</a>
                    </li>
                );
            })}
        </ul>
    </div>
);

const Navbar = () => {
    const [show, setShow] = useState(false);

    return (
        <div className={"shadow-lg fixed top-0 left-0 w-full"}>
            <div
                className={
                    "bg-[bisque] flex justify-between items-center md:h-20 duration-500 transition-all h-16 px-4 md:px-6"
                }
            >
                <div className={"md:text-2xl text-xl font-bold"}>
                    <h1>NAVBAR.</h1>
                </div>
                <button className={"md:hidden"} onClick={() => setShow(!show)}>
                    {show ? <ImCross /> : <FaBars />}
                </button>

                <ul className={"md:visible hidden md:flex items-center"}>
                    {links.map((data, index) => {
                        return (
                            <li key={data.id}>
                                <a
                                    href={data.url}
                                    className={
                                        "md:hover:text-white duration-200 md:text-base text-sm"
                                    }
                                >
                                    {data.text}
                                </a>
                            </li>
                        );
                    })}
                </ul>

                <ul className={"md:visible hidden md:flex items-center"}>
                    {social.map((data, index) => {
                        return (
                            <li key={data.id}>
                                <a
                                    href={data.url}
                                    className={
                                        "md:hover:text-white duration-200 md:text-base text-sm"
                                    }
                                >
                                    {data.icon}
                                </a>
                            </li>
                        );
                    })}
                </ul>
            </div>
            <div>{show && ull}</div>
        </div>
    );
};

export default Navbar;
