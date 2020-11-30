import styled from "styled-components";

const Body = styled.div`
  background: #ffffff;
  border-radius: 11px;
  padding: 16px;
`;

const CardHeader = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const Title = styled.h1`
  margin-left: 16px;
  font-weight: 600;
  font-size: 20px;
  line-height: 27px;
  display: flex;
  align-items: center;

  color: ${(props) => props.color || "#000"};
`;

const Icon = styled.img`
  min-width: 20px;
  min-height: 20px;

  color: ${(props) => props.color || "#000"};
`;

const Navigation = styled.div`
  background: rgba(196, 196, 196, 0.6);
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  width: 30px;
  height: 30px;
`;

const Text = styled.div`
  font-weight: 300;

  display: flex;
  align-items: center;

  color: #8c8c8c;
`;

export { Body, CardHeader, Title, Icon, Navigation, Text };
