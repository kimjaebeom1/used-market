import styled from "@emotion/styled";

export const Wrapper = styled.div`
  padding-top: 79px;
  display: flex;
  flex-direction: row;
  margin-left: 273px;
  width: 1374px;
  height: 1373px;
  justify-content: center;
`;

export const ListWrapper = styled.div`
  width: 240px;
  height: 310px;
  display: inline-block;
  flex-direction: column;
  border: 1px solid #555555;
  margin-right: 33px;
  margin-bottom: 32px;
  cursor: pointer;
  background-color: white;
  border: none;
  border-radius: 10px;
`;

export const ImageFile = styled.img`
  width: 240px;
  height: 221px;
  border-radius: 10px;
`;

export const NameTag = styled.div`
  padding-top: 8px;
  font-weight: 500;
  font-size: 16px;
  width: 130px;
  height: 25px;
  padding-left: 8px;
  color: #878787;
`;

export const Row = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  margin-top: 15px;
`;

export const PriceTag = styled.div`
  margin-right: 62px;
  font-weight: bold;
  font-size: 16px;
  width: 87px;
  height: 25px;
  color: #010101;
`;

export const TimeTag = styled.div`
  color: #ff7d9e;
  font-weight: bold;
`;
