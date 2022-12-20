import styled from "@emotion/styled";

// Head 태그 입니다 //

export const Wrapper = styled.div``;

export const CommentsBox = styled.input`
  margin-top: 29px;
  align-items: center;
  background: #e9e9e9;
  width: 379px;
  height: 147px;
  border: none;
  display: flex;
  flex-direction: column;
`;

export const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: row;
`;

export const CommentsBtn = styled.button`
  margin-top: 11px;
  border: none;
  width: 116px;
  height: 42px;
  font-weight: 700;
  font-size: 20px;
  border-radius: 10px;
  position: relative;
  left: ${(props) => (props.isEdit ? "147px" : "260px")};
  cursor: pointer;
`;

export const CancelBtn = styled.button`
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-top: 11px;
  border: none;
  width: 116px;
  height: 42px;
  font-weight: 700;
  font-size: 20px;
  cursor: pointer;
  position: relative;
  z-index: 2;
  left: 130px;
`;
