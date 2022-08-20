import styled from "@emotion/styled";

export const HeaderWrapper = styled.div`
  background-color: black;
  height: 100px;
  display: flex;
  align-items: center;
  padding-left: 50px;
`;

export const BodyWrapper = styled.div`
  height: 1188px;
  background-color: #f8f8f8;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const LoginWrapper = styled.div`
  padding-top: 81px;
  width: 742px;
  height: 802px;

  display: flex;
  flex-direction: column;
  background: #ffffff;
  box-shadow: 0px 5px 7px rgba(0, 0, 0, 0.07);
  border-radius: 10px;
`;
export const Row = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const LoginKorean = styled.div`
  margin-left: 97px;
  font-weight: 700;
  font-size: 50px;
  width: 230.4px;
`;

export const LoginEnglish = styled.div`
  font-weight: 400;
  font-size: 32px;
  width: 119.47px;
`;

export const Line = styled.div`
  margin-left: 97px;
  width: 597px;
  margin-top: 33px;
  border-top: 1px solid #c9c9c9;
`;

export const InformationWrapper = styled.div`
  padding-top: 67px;
  font-weight: 400;
  font-size: 24px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const InformationInput = styled.input`
  margin-bottom: 68px;
  padding-left: 37px;
  margin-left: 55px;
  width: 600px;
  height: 77.48px;
  background: #f6f6f6;
  border: 1px solid #cccccc;
  border-radius: 5px;
  font-weight: 400;
  font-size: 18px;
`;

export const LoginBtn = styled.button`
  margin-top: 46px;
  background: #ffe004;
  width: 330px;
  height: 70px;
  font-weight: 500;
  font-size: 20px;
  border: none;
`;
export const BottomWrapper = styled.div`
  margin-top: 47px;
  display: flex;
  flex-direction: row;
  font-weight: 400;
  font-size: 18px;
`;

export const LoginTag = styled.div`
  margin-left: 21px;
  text-decoration: underline;
  font-weight: 500;
`;

export const ErrorTag = styled.div`
  color: red;
  font-size: 16px;
  margin-right: 250px;
`;
