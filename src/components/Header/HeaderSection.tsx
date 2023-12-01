import styled from "styled-components";

const HeaderSection = () => {
  return (
    <StyledHeader className="header">
      <div className="text-[#fff]">
        <div className="header-bar">
          <div className="my-container flex justify-between items-center py-4">
            <div className="logo font-bold text-[40px]">DB-</div>

            <div className="header-nav flex items-center gap-12">
              <a href="#">Home</a>
              <a href="#">About</a>
              <a href="#">Services</a>
              <a href="#">Gallery</a>
              <a href="#">Contact</a>
            </div>
          </div>
        </div>
        <div className="my-container header-content">
          <div className="py-12">
            <p className="header-content__title text-[50px] font-bold w-[700px]">
              We build your dream house well and professionally
            </p>
            <p className="header-content__description w-[480px] my-8">
              Our team can build a house according to your wishes. Any design
              and concept, we will help make it happen
            </p>
            <button className="primary-button">Contact us</button>
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
    .header-content__description {
      width: 100%;
    }
  }
`;

export default HeaderSection;
