import styled from "styled-components";

const FeatureSection = () => {
  return (
    <StyledFeature id="about" className="my-container">
      <div className="py-16 flex items-center gap-12 feature-container">
        <div
          data-aos="fade-right"
          className="feature-images flex gap-4 w-[50%]"
        >
          <div className="flex flex-col gap-4">
            <img src="/img/feature-1.jpg" alt="img" />
            <img src="/img/feature-2.jpg" alt="img" />
          </div>
          <div className="flex flex-col gap-4">
            <img src="/img/feature-4.jpg" alt="img" />
            <img src="/img/feature-3.jpg" alt="img" />
          </div>
        </div>
        <div data-aos="fade-left" className="w-[50%] feature-content">
          <p className="text-[#056088] text-[24px] font-bold">Our company</p>
          <p className="text-[#434343] my-4">
            Debuilds is a team of architects, interior design, and contractors
            who help our clients not only to build their dream building, but
            also to feel comfortable after the building is used.
          </p>
          <p className="text-[#434343] font-bold">We already handled</p>
          <div className="text-[20px] font-bold text-[#056088] flex justify-between my-4">
            <p>50+ Clients</p>
            <p className="mx-4">30+ House</p>
            <p>20+ Building</p>
          </div>
          <button className="primary-button">See more</button>
        </div>
      </div>
    </StyledFeature>
  );
};

const StyledFeature = styled.div`
  @media (max-width: 800px) {
    .feature-container {
      display: block;
    }
    .feature-images,
    .feature-content {
      width: 100%;
    }

    .feature-images {
      margin: 20px 0;
      justify-content: center;
    }
  }
`;

export default FeatureSection;
