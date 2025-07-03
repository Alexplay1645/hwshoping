import { Link, Outlet } from "react-router-dom";
import { useState, useEffect } from "react";
import "./Main.css";

export function Main() {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    document.body.className = theme;
  }, [theme]);

  function changeTheme(e) {
    setTheme(e.target.value);
  }

  return (
    <>
      <nav id="nav">
        <div className="left-links">
          <Link to="/home">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/contacts">Contacts</Link>
        </div>
        <div id="radio">
          <span>Dark</span>
          <input
            type="radio"
            name="theme"
            value="dark"
            onChange={changeTheme}
            checked={theme === "dark"}
          />
          <span>Light</span>
          <input
            type="radio"
            name="theme"
            value="light"
            onChange={changeTheme}
            checked={theme === "light"}
          />
        </div>
      </nav>

      <div id="outlet">
        <Outlet />
      </div>

      <hr />
      <div id="footer">Footer</div>
    </>
  );
}
