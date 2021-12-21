import React from "react";
import MainContainer from "../containers/main/MainContainer";
const MainPage = ({
  loading,
  coktailData,
  setItemId,
  randomCoktail,
  onClickItem,
}) => {
  return (
    <>
      <MainContainer
        loading={loading}
        coktailData={coktailData}
        setItemId={setItemId}
        randomCoktail={randomCoktail}
        onClickItem={onClickItem}
      />
    </>
  );
};

export default MainPage;
