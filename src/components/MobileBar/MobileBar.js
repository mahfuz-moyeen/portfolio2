import React, { useEffect, useState } from 'react';
import {NavLink, useLocation } from 'react-router-dom';

const MobileBar = () => {
    const Menus = [
        { path: '/', name: "Home", icon: "home-outline", dis: "translate-x-0" },
        { path: '/about', name: "About", icon: "person-outline", dis: "translate-x-16" },
        { path: '/services', name: "Service", icon: "briefcase-outline", dis: "translate-x-32" },
        { path: '/project', name: "Project", icon: "copy-outline", dis: "translate-x-48" },
        { path: '/contact', name: "Contact", icon: "call-outline", dis: "translate-x-64" },
    ];
    const [active, setActive] = useState(0);
    const [path, setPath] = useState({});
    const location = useLocation();

    useEffect(() => {

        const item = Menus.find(menu => menu?.path === location?.pathname)
        setPath(item)
    }, [location])



    return (
        <div className="bg-neutral max-h-[5rem] px-6 rounded-t-xl z-50 ">
            <ul className="flex relative">
                <span
                    className={`bg-primary duration-500 ${path.dis} border-4 border-gray-900 h-16 w-16 absolute
         -top-5 rounded-full`}
                >
                    <span
                        className="w-3.5 h-3.5 bg-transparent absolute top-4 -left-[18px] 
          rounded-tr-[11px] shadow-myShadow1"
                    ></span>
                    <span
                        className="w-3.5 h-3.5 bg-transparent absolute top-4 -right-[18px] 
          rounded-tl-[11px] shadow-myShadow2"
                    ></span>
                </span>
                {Menus.map((menu, index) => (
                    <li key={index} className="w-16">
                        <NavLink
                            to={menu.path}
                            className="flex flex-col text-center pt-6"

                            onClick={() => setActive(index)}
                        >
                            <span
                                className={`text-xl cursor-pointer duration-500 ${menu?.path === location?.pathname && "-mt-6 text-white"
                                    }`}
                            >
                                <ion-icon name={menu.icon}></ion-icon>
                            </span>
                            <span
                                className={` ${menu?.path === location?.pathname
                                    ? "translate-y-4 duration-700 opacity-100"
                                    : "opacity-0 translate-y-10"
                                    } `}
                            >
                                {menu.name}
                            </span>
                        </NavLink>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default MobileBar;