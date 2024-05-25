"use client";

import Sidebar from "@/components/Sidebar";
import s from "./page.module.sass";
import { useState } from "react";
import Image from "next/image";

enum Genre {
  All,
  Comedy,
  Fantasy,
  Drama,
  History,
  Horror,
}

export default function Home() {
  const [genre, setGenre] = useState(Genre.All);
  return (
    <div className={s.content}>
      <div className={s.top}>
        <Image alt="logo" src={'/logo.png'} width={64} height={64}/>
        <h1>Moovy</h1>
      </div>
      <div className={s.genres}>
        <button className={`${s.genre} ${genre === Genre.All ? s.active : ''}`} onClick={() => setGenre(Genre.All)}>🍿 All</button>
        <button className={`${s.genre} ${genre === Genre.Comedy ? s.active : ''}`} onClick={() => setGenre(Genre.Comedy)}>😁 Comedy</button>
        <button className={`${s.genre} ${genre === Genre.Fantasy ? s.active : ''}`} onClick={() => setGenre(Genre.Fantasy)}>🦄 Fantasy</button>
        <button className={`${s.genre} ${genre === Genre.Drama ? s.active : ''}`} onClick={() => setGenre(Genre.Drama)}>😢 Drama</button>
        <button className={`${s.genre} ${genre === Genre.History ? s.active : ''}`} onClick={() => setGenre(Genre.History)}>📗 History</button>
        <button className={`${s.genre} ${genre === Genre.Horror ? s.active : ''}`} onClick={() => setGenre(Genre.Horror)}>😨 Horror</button>
      </div>
    </div>
  );
}
