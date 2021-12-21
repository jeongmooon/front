import React, { useRef } from "react";
import SearchInputComponent from "../../components/common/search/SearchInputComonent";
import ItemWrapComponent from "../../components/common/ItemWrapComponent";
import ItemComponent from "../../components/main/ItemComponent";

const SearchContainer = ({
  searchName,
  setSearchName,
  coktailData,
  setItemId,
  onClickItem,
}) => {
  const inputRef = useRef();
  const onChangeSearchItem = (e) => {
    setSearchName(e.target.value);
  };
  return (
    <div>
      <SearchInputComponent
        searchName={searchName}
        onChangeSearchItem={onChangeSearchItem}
        inputRef={inputRef}
      />
      {searchName === "" ? (
        <ItemWrapComponent>
          {coktailData.map((data) => {
            return (
              <ItemComponent
                key={data["_id"]}
                data={data}
                setItemId={setItemId}
                onClickItem={onClickItem}
              />
            );
          })}
        </ItemWrapComponent>
      ) : (
        <ItemWrapComponent>
          {coktailData.map((data) => {
            if (data.coktailName.indexOf(searchName) !== -1) {
              return (
                <ItemComponent
                  key={data["_id"]}
                  data={data}
                  setItemId={setItemId}
                  onClickItem={onClickItem}
                />
              );
            }
          })}
        </ItemWrapComponent>
      )}
    </div>
  );
};

export default SearchContainer;
