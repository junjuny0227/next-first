import styled from "@emotion/styled";

export const Nav = styled.nav`
  background-color: #1a1a1a;
  position: fixed;
  width: 25%;
  padding: 20px 0px;
  top: 20px;
  left: 50%;
  z-index: 10;
  border-radius: 50px;
  transform: translateX(-50%);
`;

export const Ul = styled.ul`
  display: flex;
  justify-content: center;
  gap: 50px;
`;

export const Li = styled.li`
  list-style: none;
  transform: none;
  transition: all 0.1s ease-in-out;

  &:hover {
    transform: scale(1.05);
  }
`;
