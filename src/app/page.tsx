import s from "./page.module.sass";
import { LogOut, HomeIcon, User2, Settings, History, Search } from "lucide-react";

export default function Home() {
  return (
    <div className={s.container}>
      <div className={s.sidebar}>
        <div className={s.tabs}>
          <button className={`${s.button} ${s.active}`}>
            <HomeIcon className={s.icon} color="#ffffff" />
          </button>
          <button className={s.button}>
            <User2 className={s.icon} color="#ffffff" />
          </button>
          <button className={s.button}>
            <Settings className={s.icon} color="#ffffff" />
          </button>
          <button className={s.button}>
            <History className={s.icon} color="#ffffff" />
          </button>
          <button className={s.button}>
            <Search className={s.icon} color="#ffffff" />
          </button>
        </div>
        <div className={s.logout}>
          <button className={s.button}>
            <LogOut className={s.icon} color="#ffffff" />
          </button>
        </div>
      </div>
      <div className={s.content}>
        <h1>Moovy</h1>
      </div>
    </div>
  );
}
