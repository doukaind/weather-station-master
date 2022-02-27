import styled from "styled-components";

const SidebarWrapper = styled.aside`
  /* background-color: ${(props) => props.theme.color.blueBase}; */
  align-content: space-between;
  display: grid;
  align-items: center;
  justify-items: center;
  position: relative;
  background-color: ${({ theme }) => theme.color.blueBase};
  padding: 42px ${({ theme }) => theme.size.space.xxxl};
  text-align: center;
  position: relative;
  &:before {
    content: "";
    background-image: url("assets/images/Cloud-background.png");
    /* background-color: yellow; */
    background-position-y: 120px;
    background-position-x: -77px;
    background-repeat: no-repeat;
    background-size: 137% auto;
    bottom: 0;
    left: 0;
    position: absolute;
    opacity: 0.1;
    right: 0;
    top: 0;
  }

  @media (max-width: 960px) {
    padding: ${({ theme }) => theme.size.space.xl};
  }
`;

export default SidebarWrapper;
