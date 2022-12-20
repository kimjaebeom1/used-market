import styled from "@emotion/styled";
import { Modal } from "antd";

export const Wrapper = styled.div`
  display: flex;
  width: 1920px;
  flex-direction: column;
  font-weight: bold;
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
  cursor: pointer;
`;

export const Line = styled.div`
  border-top: 1px solid #cdcdcd;
`;
export const MiddleRow = styled.div`
  display: flex;
  flex-direction: row;
  height: 157px;
  align-items: center;
  width: 100%;
  padding-left: 273px;
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
export const PaymentModal = styled(Modal)`
  position: fixed;
  top: 40%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 464px;
  background: #ffffff;
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.2);
  border-radius: 20px;
  width: 464px;
  height: 300px;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-weight: 700;
  font-size: 20px;
`;

export const PaymentSelect = styled.select`
  width: 384px;
`;
