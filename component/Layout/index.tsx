"use client";
import React, { useReducer } from "react";
import Topnav from "./TopNav";
import { useRouter, usePathname } from "next/navigation";
import Sidenav from "./SideNav";

const Layout = ({ children }: { children: any }) => {
  const router = useRouter();
  const pathname = usePathname();
  console.log(pathname);
  return (
    <div>
      {pathname.includes("Admin") ? <Topnav /> : null}
      {children}
      {pathname.includes("Admin") ? <Sidenav /> : null}
    </div>
  );
};

export default Layout;
