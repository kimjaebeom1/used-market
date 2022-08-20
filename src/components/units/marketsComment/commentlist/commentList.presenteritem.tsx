import { useMutation } from "@apollo/client";
import { Modal } from "antd";
import { useRouter } from "next/router";
import { useState } from "react";
import { getDate } from "../../../../commons/libraries/utils";
import CreateUseditemQuestion from "../commentwrite/commentWrite.container";
import {
  DELETE_USED_ITEM_QUESTION,
  FETCH_USED_ITEM_QUESTIONS,
} from "./commentList.queries";

import * as S from "./commentList.styles";

export default function ProductCommentListItemUI(props: any) {
  const [myBoardCommentId, setMyBoardCommentId] = useState("");
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [myPassword, setMypassword] = useState("");

  const router = useRouter();
  const [isEdit, setIsEdit] = useState(false);
  const [deleteUseditemQuestion] = useMutation(DELETE_USED_ITEM_QUESTION);

  const onClickDelete = async () => {
    try {
      await deleteUseditemQuestion({
        variables: {
          useditemQuestionId: props.el?._id,
        },
        refetchQueries: [
          {
            query: FETCH_USED_ITEM_QUESTIONS,
            variables: { useditemId: router.query.id },
          },
        ],
      });
    } catch (error) {
      if (error instanceof Error) Modal.error({ content: error.message });
    }
  };

  const onClickEdit = () => {
    setIsEdit(true);
  };

  return (
    <>
      {!isEdit && (
        <S.Wrapper>
          <S.UserWrapper>
            <S.Profile src="/assets/profile.svg" />
            <S.CenterWrapper>
              <S.NameTag>{props.el?.user.name}</S.NameTag>
              <S.Date>{getDate(props.el?.createdAt)}</S.Date>
            </S.CenterWrapper>
            <S.IconWrapper>
              <S.UpdateIconWrapper>
                <S.UpdateIcon onClick={onClickEdit} src="/assets/edit.svg" />
              </S.UpdateIconWrapper>

              <S.DeleteIcon onClick={onClickDelete} src="/assets/delete.svg" />
            </S.IconWrapper>
          </S.UserWrapper>
          <S.ContentsTag>{props.el?.contents}</S.ContentsTag>
        </S.Wrapper>
      )}

      {isEdit && (
        <CreateUseditemQuestion
          isEdit={true}
          setIsEdit={setIsEdit}
          el={props.el}
        />
      )}
    </>
  );
}
