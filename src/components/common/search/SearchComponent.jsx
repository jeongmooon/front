import React from "react";
import styled from "styled-components";

const SearchButtonImg = styled.img`
  width: 30px;
  height: 30px;
  cursor: pointer;
`;

const SearchComponent = ({ onClickSearch }) => {
  return (
    <SearchButtonImg
      src="https://d1unjqcospf8gs.cloudfront.net/assets/home/base/header/search-icon-7008edd4f9aaa32188f55e65258f1c1905d7a9d1a3ca2a07ae809b5535380f14.svg"
      alt="SearchImg"
      onClick={onClickSearch}
    />
  );
};

export default SearchComponent;
