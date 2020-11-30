import styled from "styled-components";

const Container = styled.div`
  padding: 16px;
  background-color: #ffffff;
  display: flex;

  flex-direction: column;

  align-items: flex-start;
  border-radius: 46px 46px 0 0;

  /* position: absolute; */

  height: 100%;
`;
const SectionBody = styled.div`
  display: flex;

  flex-direction: column;
  padding: 12px;
`;

const SectionTitle = styled.h1`
  font-weight: bold;
  font-size: 24px;

  color: #323232;
`;
export { Container, SectionBody, SectionTitle };
