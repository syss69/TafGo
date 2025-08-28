import { Outlet } from "react-router-dom";

export default function DefaultLayout() {
  return (
    <div className="flex">
      <div className="flex-1">
        <main className="p-6">
          <Outlet />
        </main>
      </div>
    </div>
  );
}