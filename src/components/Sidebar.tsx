'use client'

import React from "react";
import s from "./Sidebar.module.sass";
import {
  LogOut,
  HomeIcon,
  User2,
  Settings,
  History,
  Search,
} from "lucide-react";
import { usePathname } from "next/navigation";
import Link from "next/link";

function Sidebar() {
  const path = usePathname();

  return (
    <div className={s.sidebar}>
      <div className={s.tabs}>
        <a href={'/'} className={`${s.link} ${path === "/" ? s.active : ''}`}>
          <HomeIcon className={s.icon} color="#ffffff" />
        </a>
        <a href={'/profile'} className={`${s.link} ${path === "/profile" ? s.active : ''}`}>
          <User2 className={s.icon} color="#ffffff" />
        </a>
        <a href={'/settings'} className={`${s.link} ${path === "/settings" ? s.active : ''}`}>
          <Settings className={s.icon} color="#ffffff" />
        </a>
        <a href={'/history'} className={`${s.link} ${path === "/history" ? s.active : ''}`}>
          <History className={s.icon} color="#ffffff" />
        </a>
        <a href={'/search'} className={`${s.link} ${path === "/search" ? s.active : ''}`}>
          <Search className={s.icon} color="#ffffff" />
        </a>
      </div>
      <div className={s.logout}>
        <button className={s.link}>
          <LogOut className={s.icon} color="#ffffff" />
        </button>
      </div>
    </div>
  );
}

export default Sidebar;
