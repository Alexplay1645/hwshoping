import { Link, Outlet } from "react-router-dom";
import './Main.css';
import { useState, useEffect } from "react";

export function Main() {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    document.body.className = theme; }, [theme]);

  const darkClass = theme === "dark" ? "dot dark active" : "dot dark";
  const lightClass = theme === "light" ? "dot light active" : "dot light";

    function changeTheme(event) {
    setTheme(event.target.value);
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
            name="radio"
            value="dark"
            onClick={changeTheme}
            checked={theme === "dark"}
          />
          <span>Light</span>
          <input
            type="radio"
            name="radio"
            value="light"
            onClick={changeTheme}
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
