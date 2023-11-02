import {FC, useLayoutEffect} from "react";
import {useEffect, useState} from "react";
import {Link} from "react-router-dom";
import {IoMoon, IoMoonOutline} from "react-icons/io5";
import {Container} from "../../Layouts/Container";
import {HeaderEl, ModeSwitcher, Title, Wrapper} from "./HeaderLayout";

type ThemeType = "dark" | "light"

export const Header: FC = () => {
  const [theme, setTheme] = useState<ThemeType>("light");

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light"
    setTheme((prev) => prev = newTheme);
    localStorage.setItem("theme", newTheme)
  }

  useLayoutEffect(() => {
    if (!localStorage.getItem("theme")) return

    const storageTheme = localStorage.getItem("theme") as ThemeType
    setTheme((prev) => prev = storageTheme);
  }, [])

  useEffect(() => {
    document.body.setAttribute("data-theme", theme);
  }, [theme]);

  return (
    <div>
      <HeaderEl>
        <Container>
          <Wrapper>
            <Link to='/' style={{textDecoration: "none"}}>
              <Title>Where is the world?</Title>
            </Link>
            <ModeSwitcher onClick={toggleTheme}>
              {theme === "light" ? <IoMoonOutline size={"16px"}/> : <IoMoon size={"16px"}/>}
              <span style={{marginLeft: "0.75rem"}}>{theme} Theme</span>
            </ModeSwitcher>
          </Wrapper>
        </Container>
      </HeaderEl>
    </div>
  );
};
