import styled from "styled-components";
import { useEffect, useState } from "react";

import { IoMoon, IoMoonOutline } from "react-icons/io5";

import { Container } from "./Container";

// styled-components----------------------------------------------------------------
const HeaderEl = styled.header`
  box-shadow: var(--shadow);
  background-color: var(--colors-ui-base);
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 1.5rem 0;
`;

const Title = styled.a.attrs({
  href: "/",
})`
  color: var(--colors-text);
  font-size: var(--fs-md);
  text-decoration: none;
  font-weight: var(--fw-bold);
`;

const ModeSwitcher = styled.div`
  color: var(--colors-text);
  font-size: var(--fs-md);
  text-transform: capitalize;
  cursor: pointer;
`;
// ---------------------------------------------------------------------------------

export const Header: React.FC = () => {
  const [theme, setTheme] = useState<string>("light");

  const toggleTheme = () => setTheme(theme === "light" ? "dark" : "light");

  useEffect(() => {
    document.body.setAttribute("data-theme", theme);
  }, [theme]);

  return (
    <div>
      <HeaderEl>
        <Container>
          <Wrapper>
            <Title>Where is the world?</Title>
            <ModeSwitcher onClick={toggleTheme}>
              {theme === "light" ? <IoMoonOutline size={"16px"} /> : <IoMoon size={"16px"} />}
              <span style={{ marginLeft: "0.75rem" }}>{theme} Theme</span>
            </ModeSwitcher>
          </Wrapper>
        </Container>
      </HeaderEl>
    </div>
  );
};
