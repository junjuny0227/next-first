import Link from "next/link";
import styled from "@emotion/styled";

export const MovieContainer = styled.div`
  display: grid;
  grid-template-rows: 1fr auto;
  gap: 20px;
  cursor: pointer;
  place-items: center;
`;

export const StyledImage = styled.img`
  max-width: 100%;
  min-height: 100%;
  border-radius: 10px;
  transition: opacity 0.3s ease-in-out;
  opacity: 0.7;

  &:hover {
    opacity: 1;
  }
`;

export const StyledLink = styled(Link)`
  text-align: center;
`;
