import styled from "@emotion/styled";
import { Modal } from "antd";
import dynamic from "next/dynamic";
import DaumPostcodeEmbed from "react-daum-postcode";
import "react-quill/dist/quill.snow.css";

const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 274px;
  margin-top: 65px;
  width: 1373px;
  height: 1742px;
`;

export const HeadTag = styled.div`
  font-weight: 700;
  font-size: 40px;
`;

export const Line = styled.div`
  width: 1372.8px;
  margin-top: 33px;
  border-top: 3px solid #555555;
`;

export const InfoTag = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 30px;
`;

export const UploadWrapper = styled.div`
  display: flex;
  flex-direction: row;
`;

export const Row = styled.div`
  flex-direction: row;
`;

export const Info = styled.div`
  width: 145.75px;
  font-weight: 500;
  font-size: 24px;
`;
export const InfoInput = styled.input`
  padding-left: 19px;
  margin-left: 113px;
  width: 1117px;
  height: 56px;
  background: #e9e9e9;
  border: 1px solid #cccccc;
  border-radius: 5px;
`;

export const ContentsBox = styled(ReactQuill)`
  width: 1117px;
  height: 431px;
  margin-left: 113px;
  margin-bottom: 51px;
`;

export const AddressWrapper = styled.div`
  margin-top: 26px;
  margin-left: 26px;
  flex-direction: column;
`;
export const ZipcodeInput = styled.input`
  text-align: center;
  width: 77px;
  height: 52px;
  font-weight: 400;
  font-size: 16px;
`;
export const AddressBtn = styled.button`
  margin-left: 16px;
  width: 124px;
  height: 51px;
  background: #000000;
  color: white;
  border: none;
  font-weight: 500;
  font-size: 16px;
`;

export const AddressInput = styled.input`
  margin-top: 26px;
  margin-left: ;
  width: 1010px;
  height: 56px;
  background: #e9e9e9;
  border: 1px solid #cccccc;
  border-radius: 5px;
`;

export const AddressDetailInput = styled.input`
  margin-top: 24px;
  width: 1010px;
  height: 56px;
  background: #e9e9e9;
  border: 1px solid #cccccc;
  border-radius: 5px;
`;

// 버튼
export const BtnWrapper = styled.div`
  align-items: center;
  margin-left: 450px;
`;

export const CancelBtn = styled.button`
  margin-top: 87px;
  background: #ffe004;
  width: 195px;
  height: 77px;
  font-weight: 500;
  font-size: 20px;
  border: none;
`;
export const RegisterBtn = styled.button`
  margin-top: 87px;
  margin-left: 21px;
  width: 195px;
  height: 77px;
  background: #000000;
  color: white;
  font-weight: 500;
  font-size: 20px;
`;

export const AddressSearchInput = styled(DaumPostcodeEmbed)``;

export const PaymentButton = styled.button``;

export const AddressModal = styled(Modal)`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;
