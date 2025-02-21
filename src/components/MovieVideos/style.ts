import styled from "@emotion/styled";

export const Container = styled.div`
  width: 80%;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 20px;
  margin-top: 100px;
  padding-bottom: 100px;
`;

export const Iframe = styled.iframe`
  border-radius: 10px;
  opacity: 0.8;
  transition: opacity 0.2s ease-in-out;

  &:hover {
    opacity: 1;
  }
`;
