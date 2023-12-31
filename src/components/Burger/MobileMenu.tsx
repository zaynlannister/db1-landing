import styled from "styled-components";
interface MobileMenuInterface {
  menuOpen: boolean;
  toggleMenu: () => void;
}

const MobileMenu = (props: MobileMenuInterface) => {
  return (
    <StyledMenu
      className={`bg-[#fff] absolute flex flex-col text-[22px] w-[100%] left-0 bottom-0 right-0 top-[60px] px-4 z-50 ${
        !props.menuOpen ? "" : "hidden-menu"
      }`}
    >
      <div onClick={props.toggleMenu} className="flex flex-col">
        <a href="#home">Home</a>
        <a href="#about">About</a>
        <a href="#services">Services</a>
        <a href="#services">Gallery</a>
        <a href="#contact">Contact</a>
      </div>
    </StyledMenu>
  );
};

const StyledMenu = styled.div`
  left: -600%;
  transition: 100ms all;
  height: 100vh;
  a {
    color: #000;
    font-size: 20px;
    border-bottom: 1px solid #ccc;
    padding: 30px 10px;
  }
  &.hidden-menu {
    left: 0;
  }
`;

export default MobileMenu;
