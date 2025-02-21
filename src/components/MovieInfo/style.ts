import styled from "@emotion/styled";

export const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr;
  gap: 50px;
  width: 80%;
  margin: 0 auto;
`;

export const StyledImg = styled.img`
  border-radius: 20px;
  max-width: 70%;
  place-self: center;
`;

export const MovieInfo = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 20px;
  gap: 20px;
`;

export const MovieTitle = styled.h1`
  color: white;
  font-size: 36px;
  font-weight: 600;
`;
