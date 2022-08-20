import { useMutation } from "@apollo/client";
import { useRouter } from "next/router";
import { ChangeEvent, useState } from "react";
import { FETCH_USED_ITEM_QUESTIONS } from "../commentlist/commentList.queries";
import ProductCommentWriteUI from "./commentWrite.presenter";

import {
  CREATE_USED_ITEM_QUESTION,
  UPDATE_USED_ITEM_QUESTION,
} from "./commentWrite.queries";

export default function CreateUseditemQuestion(props) {
  const router = useRouter();
  const [createUseditemQuestion] = useMutation(CREATE_USED_ITEM_QUESTION);
  const [updateUseditemQuestion] = useMutation(UPDATE_USED_ITEM_QUESTION);
  const [contents, setContents] = useState("");

  const onChangeContents = (event: ChangeEvent<HTMLInputElement>) => {
    setContents(event.target.value);
  };

  const onClickWrite = async () => {
    if (typeof router.query.id !== "string") return;

    try {
      await createUseditemQuestion({
        variables: {
          createUseditemQuestionInput: {
            contents: String(contents),
          },
          useditemId: router.query.id,
        },
        refetchQueries: [
          {
            query: FETCH_USED_ITEM_QUESTIONS,
            variables: { useditemId: router.query.id },
          },
        ],
      });
    } catch (error) {
      if (error instanceof Error) alert(error.message);
    }
    setContents("");
    console.log(contents);
  };

  const onClickUpdate = async () => {
    if (!contents) {
      alert("내용이 수정되지 않았습니다.");
      return;
    }

    try {
      const updateUseditemQuestionInput: any = {};
      if (contents) updateUseditemQuestionInput.contents = contents;

      if (typeof props.el?._id !== "string") return;
      await updateUseditemQuestion({
        variables: {
          useditemQuestionId: props.el?._id,
          updateUseditemQuestionInput,
        },
        refetchQueries: [
          {
            query: FETCH_USED_ITEM_QUESTIONS,
            variables: { useditemId: router.query.id },
          },
        ],
      });
      props.setIsEdit(false);
    } catch (error) {
      if (error instanceof Error) alert(error.message);
    }
  };

  const onClickCancel = async () => {
    return false;
  };

  return (
    <ProductCommentWriteUI
      onChangeContents={onChangeContents}
      onClickWrite={onClickWrite}
      onClickUpdate={onClickUpdate}
      onClickCancel={onClickCancel}
      contents={contents}
      isEdit={props.isEdit}
      el={props.el}
    />
  );
}
