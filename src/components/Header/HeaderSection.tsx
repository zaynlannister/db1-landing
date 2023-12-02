import React from "react";
import styled from "styled-components";
import MobileMenu from "../Burger/MobileMenu";
import BurgerMenu from "../Burger/BurgerMenu";

const HeaderSection = () => {
  const [open, setOpen] = React.useState<boolean>(false);

  const toggleMenu = () => {
    setOpen(!open);

    if (open) {
      document.body.classList.remove("menu-open");
      document.documentElement.classList.remove("menu-open");
    } else {
      document.body.classList.add("menu-open");
      document.documentElement.classList.add("menu-open");
    }
  };
  return (
    <StyledHeader id="home" className="header">
      <MobileMenu menuOpen={open} toggleMenu={toggleMenu} />
      <div className="text-[#fff]">
        <div className="header-bar">
          <div className="my-container flex justify-between items-center py-4">
            <div data-aos="fade-right" className="logo font-bold text-[40px]">
              DB-
            </div>

            <div
              data-aos="fade-left"
              className="header-nav flex items-center gap-12"
            >
              <a href="#home">Home</a>
              <a href="#about">About</a>
              <a href="#services">Services</a>
              <a href="#services">Gallery</a>
              <a href="#contact">Contact</a>
            </div>
            <div className="header-burger hidden">
              <BurgerMenu menuOpen={open} toggleMenu={toggleMenu} />
            </div>
          </div>
        </div>
        <div className="my-container header-content">
          <div className="py-12">
            <p
              data-aos="fade-down"
              className="header-content__title text-[50px] font-bold w-[700px]"
            >
              We build your dream house well and professionally
            </p>
            <p
              data-aos="fade-right"
              className="header-content__description w-[480px] my-8"
            >
              Our team can build a house according to your wishes. Any design
              and concept, we will help make it happen
            </p>
            <button data-aos="fade-up" className="primary-button">
              Contact us
            </button>
          </div>
        </div>
      </div>
    </StyledHeader>
  );
};

const StyledHeader = styled.div`
  .header-bar {
    background-color: #0000007a;
  }
  @media (max-width: 800px) {
    .header-content__title {
      width: 100%;
      font-size: 30px;
    }
  }

  @media (max-width: 645px) {
    .header-nav {
      display: none;
    }
    .header-burger {
      display: block;
    }
    .header-content__description {
      width: 100%;
    }
  }
`;

export default HeaderSection;
