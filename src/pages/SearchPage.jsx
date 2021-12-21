import React from "react";
import SearchContainer from "../containers/search/SearchContainer";

const SearchPage = ({
  searchName,
  setSearchName,
  coktailData,
  setItemId,
  onClickItem,
}) => {
  return (
    <SearchContainer
      searchName={searchName}
      setSearchName={setSearchName}
      coktailData={coktailData}
      setItemId={setItemId}
      onClickItem={onClickItem}
    />
  );
};

export default SearchPage;
