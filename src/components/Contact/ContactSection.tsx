import styled from "styled-components";

const ContactSection = () => {
  return (
    <StyledContactSection
      id="contact"
      className="contact-container py-20 mt-16"
    >
      <div className="my-container text-[#fff]">
        <div className="text-center">
          <p className="text-[45px] font-bold contact-title">
            Want to get our offer updates and news?
          </p>
          <p>
            Submit your e-mail and we will give you update about information and
            discount. Every single week. (not spamming)
          </p>
        </div>
        <div className="flex justify-center contact-action mt-8">
          <input
            className="px-4 w-[350px] text-black"
            type="text"
            placeholder="Enter your e-mail here"
          />
          <button className="primary-button">Submit</button>
        </div>
      </div>
    </StyledContactSection>
  );
};

const StyledContactSection = styled.div`
  background-image: url("/img/contact-bg.jpg");
  background-size: cover;

  .contact-action {
    input {
      outline: none;
    }
  }

  @media (max-width: 800px) {
    .contact-title {
      font-size: 26px;
      margin-bottom: 10px;
    }
  }

  @media (max-width: 350px) {
    .contact-action input {
      width: 100%;
    }
  }
`;

export default ContactSection;
