import { useTheme } from "./context/ThemeContext";
import { LuSunMedium } from "react-icons/lu";
import { LuMoonStar } from "react-icons/lu";

function App() {
  const { theme, changeToggleThemeValue } = useTheme();

  return (
    <main
      className={`min-h-screen flex items-center justify-center gap-3  font-bold text-lg  transition-all ${
        theme === "Light"
          ? "bg-gray-600 text-slate-200"
          : " bg-slate-100 text-slate-800"
      }`}
    >
      <span className="invisible md:visible">Light</span>
      <button
        onClick={changeToggleThemeValue}
        className={`w-[110px] h-[60px] rounded-full  relative transition-all ${
          theme === "Light" ? "bg-slate-300" : "bg-slate-500 "
        }`}
      >
        <div
          className={`w-[50px] h-[50px]  rounded-full shadow-xl bg-slate-100 absolute top-[5px] flex items-center justify-center text-2xl ${
            theme === "Light"
              ? " right-[5px] bg-gray-600"
              : "left-[5px] bg-slate-100"
          }`}
        >
          {theme === "Dark" ? <LuSunMedium /> : <LuMoonStar />}
        </div>
      </button>
      <span className="invisible md:visible">Dark</span>
    </main>
  );
}

export default App;
