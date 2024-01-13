import React from "react";

const THEMES = [
  "light",
  "dark",
  "cupcake",
  "bumblebee",
  "emerald",
  "corporate",
  "synthwave",
  "retro",
  "cyberpunk",
  "valentine",
  "halloween",
  "garden",
  "forest",
  "aqua",
  "lofi",
  "pastel",
  "fantasy",
  "wireframe",
  "black",
  "luxury",
  "dracula",
  "cmyk",
  "autumn",
  "business",
  "acid",
  "lemonade",
  "night",
  "coffee",
  "winter",
  "dim",
  "nord",
  "sunset",
];

export default function Header() {
  const [theme, setTheme] = React.useState("light");

  React.useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  const handleThemeChange = (e) => {
    var val = e.target.getAttribute("data-set-theme");
    setTheme(val);
  };

  return (
    <header className="sticky top-0 z-50 py-2 bg-base-100">
      <div className="container">
        <div className="navbar px-0">
          <div className="navbar-start">
            <div className="dropdown">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-primary btn-circle lg:hidden mr-1"
              >
                <i className="bi bi-list text-2xl"></i>
              </div>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content mt-1 z-[1] p-2 shadow bg-base-200 rounded-box w-52"
              >
                <div className="grid grid-flow-col gap-1">
                  <a className="link link-secondary" href="#!">
                    <i className="btn bi bi-facebook text-xl btn-primary sm:btn-wide"></i>
                  </a>
                  <a className="link link-secondary" href="#!">
                    <i className="btn bi bi-instagram text-xl btn-secondary sm:btn-wide"></i>
                  </a>
                </div>
              </ul>
            </div>
            <a className="btn btn-ghost text-2xl">daisyUI</a>
          </div>
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1 font-medium">
              <div className="grid grid-flow-col gap-4">
                <a className="link link-secondary" href="#!">
                  <i className="btn bi bi-facebook text-xl btn-primary sm:btn-wide"></i>
                </a>
                <a className="link link-secondary" href="#!">
                  <i className="btn bi bi-instagram text-xl btn-secondary sm:btn-wide"></i>
                </a>
              </div>
            </ul>
          </div>
          <div className="navbar-end">
            <div className="dropdown dropdown-end">
              <label tabIndex={0} className="btn">
                {THEMES.length} Themes
              </label>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content mt-1 z-[1] p-2 shadow bg-base-200 rounded-box w-52 max-h-96 overflow-y-auto"
              >
                {THEMES.map((theme, i) => (
                  <li key={theme + i}>
                    <button data-set-theme={theme} onClick={handleThemeChange}>
                      {i + 1 + ". " + theme}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
