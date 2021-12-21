import React from "react";
import DetailContainer from "../containers/detail/DetailContainer";
import DeleteButtonContainer from "../containers/delete/DeleteButtonContainer";

const DetailPage = ({ itemId, getDetailData, detailData, isAdminLogined }) => {
  console.log(itemId)
  return (
    <>
      <DetailContainer
        itemId={itemId}
        getDetailData={getDetailData}
        detailData={detailData}
        isAdminLogined={isAdminLogined}
      />
      {isAdminLogined ? <DeleteButtonContainer _id={itemId} /> :""}
    </>
  );
};

export default DetailPage;
