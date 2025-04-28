"use client";
import React, { useEffect } from "react";
import { MenuDisplay } from "../miniWidgets/MenuDisplay";
import { useDispatch, useSelector } from "react-redux";
import MenuCategory from "./MenuCategory";
const MenuList = () => {
  const { menuList } = useSelector((state) => state.menu);
  return (
    <div className="flex flex-col  w-[90%] mx-auto ">
      {menuList.map((menu, i) => (
        <div className=" w-[90%] mx-auto " key={i}>
          {" "}
          <MenuCategory category={menu.name} img={menu.img} />
          <MenuDisplay menu={menu.items} />
        </div>
      ))}
    </div>
  );
};

export default MenuList;
