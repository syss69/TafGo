import { Outlet } from "react-router-dom";
import TafGoCircle from "../assets/TafGo_circle.png"

export default function ErrorLayout() {
  return (
    <div className="flex dark:bg-stone-900 h-screen text-white gap-5">
      <div className="flex-1">
        <div className="flex pl-5 pt-5">
            <img src={TafGoCircle} alt="Лого" className="w-32 h-32" />
        </div>
        <main className="p-6">
          <Outlet />
        </main>
      </div>
    </div>
  );
}