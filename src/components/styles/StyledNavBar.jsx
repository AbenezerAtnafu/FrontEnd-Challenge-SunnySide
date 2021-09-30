import styled from "styled-components";
import headerLogo from "../../assets/logo.svg";

export const Row = styled.div`
  max-width: 114rem;
  margin: 0 auto;
`;

const Nav = styled.div`
  padding-top: 3rem;
`;

const NavFlex = styled.nav`
  display: flex;
  align-items: center;
`;

const NavLogo = styled.div`
  background-image: url(${headerLogo});
  margin-right: auto;
  width: 124px;
  height: 24px;
`;

const NavList = styled.ul`
  list-style: none;
`;

const NavItem = styled.li`
  display: inline-block;
  padding: 0 2rem;
`;

const NavLink = styled.a`
  text-decoration: none;
  cursor: pointer;
  color: ${({ theme }) => theme.colors.white};
  padding: 0rem 2rem;
  font-size: 1.5rem;

  &:hover {
    color: ${({ theme }) => theme.colors.photographyText};
  }
`;

export const NavButton = styled.button`
  padding: 1.5rem 2.5rem;
  border: none;
  border-radius: 10rem;
  outline: none;
  cursor: pointer;
  background-color: #fff;
  color: #000;
  font-family: ${({ theme }) => theme.fonts.secondary}, sans-serif;
  font-weight: 900;
`;

//mobile nav bar
const Hamburger = styled.div``;

export const StyledNavBar = function () {
  return (
    <>
      <Row>
        <Nav>
          <NavFlex>
            <NavLogo />
            <NavList>
              <NavItem>
                <NavLink>About</NavLink>
                <NavLink>Services</NavLink>
                <NavLink>Projects</NavLink>
              </NavItem>
            </NavList>
            <NavButton>CONTACT</NavButton>
          </NavFlex>
        </Nav>
      </Row>
    </>
  );
};
