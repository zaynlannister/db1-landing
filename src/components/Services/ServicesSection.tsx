import styled from "styled-components";

const services = [
  {
    img: "sofa",
    title: "Interior Design",
    description:
      "We have an interior designer for design your perfect inside house",
  },
  {
    img: "house",
    title: "Build from scratch",
    description: "We have an contractor for build new building from scratch",
  },
  {
    img: "construction",
    title: "Renovation",
    description: "We can also renovate or rebuilds new buildings/house",
  },
];

const ServicesSection = () => {
  return (
    <StyledServices className="my-container">
      <div className="text-center">
        <p className="text-[#056088] text-[24px] font-bold my-4">
          Our services
        </p>
        <p>
          Our services include building new buildings and renovating old
          buildings
        </p>
      </div>
      <div className="services-cards flex gap-8 mt-8">
        {services.map((item, index) => (
          <div key={index} className="services__card border border-silver p-4 ">
            <img src={`/img/${item.img}.svg`} alt="img" />
            <p className="text-[20px] font-bold mt-2">{item.title}</p>
            <p>{item.description}</p>
          </div>
        ))}
      </div>
    </StyledServices>
  );
};

const StyledServices = styled.div`
  @media (max-width: 800px) {
    .services-cards {
      flex-direction: column;
    }
    .services__card {
      width: 100%;
    }
  }
`;

export default ServicesSection;
