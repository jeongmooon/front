import React, { useEffect } from "react";
import styled from "styled-components";

const SearchWrap = styled.div`
  width: 100%;
  max-width: 1200px;
  height: 60px;
  margin: 0 auto;
  line-height: 80px;
  text-align: center;

  @media only screen and (min-width: 768px) {
    margin-top: 30px;
    margin-bottom: 40px;
  }
`;

const SearchInput = styled.input`
  box-sizing: border-box;
  width: 170px;
  height: 30px;
  padding: 0 15px;
  outline: none;
  border-radius: 5px;
  border: 1px solid silver;

  @media only screen and (min-width: 768px) {
    width: 300px;
  }
`;

const SearchComonent = ({ searchName, onChangeSearchItem, inputRef }) => {
  useEffect(() => {
    inputRef.current.focus();
  }, []);

  return (
    <SearchWrap>
      <SearchInput
        type="text"
        placeholder="칵테일 이름을 검색하세요"
        onChange={onChangeSearchItem}
        ref={inputRef}
        value={searchName}
      />
    </SearchWrap>
  );
};

export default SearchComonent;
