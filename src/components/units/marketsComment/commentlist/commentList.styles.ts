import styled from "@emotion/styled";
import { Modal, Rate } from "antd";

//전체//

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 363px;
  margin-top: 36px;
  height: 115px;
`;

export const UserWrapper = styled.div`
  display: flex;
  flex-direction: row;
`;

export const Profile = styled.img`
  width: 48px;
  height: 48px;
`;

export const CenterWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-left: 16px;
`;

export const NameTag = styled.div``;

export const Date = styled.div`
  color: lightgray;
  padding-top: 15px;
`;

export const IconWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
`;

export const UpdateIconWrapper = styled.div`
  padding-right: 15px;
`;

export const UpdateIcon = styled.img`
  width: 15px;
  height: 15px;
  cursor: pointer;
`;
export const DeleteIcon = styled.img`
  width: 15px;
  height: 15px;
  cursor: pointer;
`;

export const ContentsTag = styled.div`
  margin-top: 20px;
`;

export const PasswordModal = styled(Modal)``;
