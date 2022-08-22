import { useMutation, useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import ProductWriteUI from "./productWrite.presenter";
import {
  CREATE_USED_ITEM,
  FETCH_USER_LOGGED_IN,
  UPDATE_USED_ITEM,
} from "./productWrite.queries";

export default function ProductWrite(props) {
  const [fileUrls, setFileUrls] = useState(["", ""]);
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);
  const [createUseditem] = useMutation(CREATE_USED_ITEM);
  const [updateUseditem] = useMutation(UPDATE_USED_ITEM);

  const { register, handleSubmit, setValue, trigger, getValues } = useForm({
    mode: "onChange",
  });
  const { data } = useQuery(FETCH_USER_LOGGED_IN);

  useEffect(() => {
    if (props.data?.fetchUseditem.images?.length) {
      setFileUrls([...props.data?.fetchUseditem.images]);
    }
  }, [props.data]);

  useEffect(() => {
    if (!localStorage.getItem("accessToken")) {
      alert("상품을 등록하려면 로그인이 필요합니다.");

      router.push("/login");
    }
  }, []);

  const onChangeContents = (value: string) => {
    console.log(value);
    setValue("contents", value === "<p><br></p>" ? "" : value);
    trigger("contents");
  };

  // 주소 관련
  const onCompleteAddressSearch = (data: any) => {
    setValue("useditemAddress.zipcode", data.zonecode);
    setValue("useditemAddress.address", data.address);
    trigger("useditemAddress.zipcode");
    trigger("useditemAddress.address");

    console.log(data);
    setIsOpen(false);
  };

  const onClickAddressModal = () => {
    setIsOpen(true);
  };

  const handleOk = () => {
    setIsOpen(false);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  const onClickCreateUseditem = async (data) => {
    const result = await createUseditem({
      variables: {
        createUseditemInput: {
          name: data.name,
          remarks: data.remarks,
          contents: String(data.contents),
          price: Number(data.price),
          tags: data.tags,
          images: [...fileUrls],
          useditemAddress: {
            zipcode: data.useditemAddress.zipcode,
            address: data.useditemAddress.address,
            addressDetail: data.useditemAddress.addressDetail,
          },
        },
      },
    });
    alert("등록되었습니다.");
    router.push(`/${result.data?.createUseditem._id}`);
  };

  const onClickUpdateUseditem = async (data) => {
    try {
      const result = await updateUseditem({
        variables: {
          useditemId: router.query.id,
          updateUseditemInput: {
            name: data.name,
            remarks: data.remarks,
            contents: data.contents,
            price: Number(data.price),
            tags: data.tags,
            images: [...fileUrls],
            useditemAddress: {
              zipcode: data.useditemAddress.zipcode,
              address: data.useditemAddress.address,
              addressDetail: data.useditemAddress.addressDetail,
            },
          },
        },
      });
      router.push(`/${result.data?.updateUseditem._id}`);
    } catch (error) {
      if (error instanceof Error) alert(error.message);
    }
  };

  const onChangeFileUrls = (fileUrl: string, index: number) => {
    const newFileUrls = [...fileUrls];
    newFileUrls[index] = fileUrl;
    setFileUrls(newFileUrls);
    console.log(newFileUrls);
  };

  return (
    <ProductWriteUI
      data={props.data}
      register={register}
      handleSubmit={handleSubmit}
      setValue={setValue}
      trigger={trigger}
      getValues={getValues}
      onClickCreateUseditem={onClickCreateUseditem}
      onClickUpdateUseditem={onClickUpdateUseditem}
      onChangeContents={onChangeContents}
      onChangeFileUrls={onChangeFileUrls}
      fileUrls={fileUrls}
      isOpen={isOpen}
      isEdit={props.isEdit}
      onCompleteAddressSearch={onCompleteAddressSearch}
      onClickAddressModal={onClickAddressModal}
      address={getValues("useditemAddress.address")}
      zipcode={getValues("useditemAddress.zipcode")}
      handleOk={handleOk}
      closeModal={closeModal}
    />
  );
}
