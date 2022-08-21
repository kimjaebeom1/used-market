import styled from "@emotion/styled";

export const Wrapper = styled.div`
  display: flex;
  width: 1920px;
  flex-direction: column;
`;
export const Row = styled.div`
  display: flex;
  flex-direction: row;
  height: 100px;
  align-items: center;
`;
export const HeaderWrapper = styled.div`
  display: flex;
  margin-left: ${(props) => (props.data ? "1300px" : "1354px")};
`;

export const LoginTag = styled.div``;

export const SignUpTag = styled.div`
  margin-left: 45.15px;
`;
export const BasketTag = styled.div`
  margin-left: 45.15px;
`;

export const Line = styled.div`
  border-top: 1px solid black;
`;
export const MiddleRow = styled.div`
  display: flex;
  flex-direction: row;
  height: 157px;
  align-items: center;
  margin-left: 273px;
`;
export const SellWrapper = styled.div`
  display: flex;
  flex-direction: row;
  margin-left: 960px;
`;

export const SellTag = styled.div`
  display: flex;
  flex-direction: row;
  margin-left: 11px;
  font-weight: 500;
  font-size: 24px;
`;

export const ChargeTag = styled.div`
  display: flex;
  flex-direction: row;
  cursor: pointer;
  text-decoration: underline;
  margin-left: 5px;
`;
export const ChargeRow = styled.div`
  display: flex;
  flex-direction: row;
`;
