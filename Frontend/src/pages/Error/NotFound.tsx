import TafGoCircle from "../../assets/TafGo_circle.png"

export default function NotFound() {
  return (
    <div className="flex dark:bg-stone-900 h-screen text-white gap-5">
      <div className="flex-1">
        <div className="flex pl-5 pt-5 h-[20%]">
            <img src={TafGoCircle} alt="Лого" className="w-32 h-32" />
        </div>
        <main className="flex h-[50%] items-center justify-center p-6">
          <div className="text-center">
            <h1 className="text-6xl font-bold text-white">404</h1>
            <p className="mt-4 text-xl text-gray-300">Page not found</p>
            <a
              href="/"
              className="mt-6 inline-block rounded-lg bg-blue-600 px-4 py-2 text-white hover:bg-blue-700"
            >
              Main page
            </a>
          </div>
        </main>
      </div>
    </div>
  );
}