import styled from "styled-components";

const SidebarWrapper = styled.aside`
  background-color: ${(props) => props.theme.color.blueBase};
  display: grid;
  align-items: center;
  justify-items: center;
`;

export default SidebarWrapper;
