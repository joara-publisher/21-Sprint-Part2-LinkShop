import { useState } from "react";
import SearchInput from "../components/SearchInput";
import SortOptionsButton from "../components/SortOptionsButton";
import LinkCardList from "../components/LinkCardList";
import { SORTING_OPTIONS } from "../constants/sortingOptions";

function ShopList() {
  const [searchText, setSearchText] = useState("");
  const [sortBy, setSortBy] = useState(SORTING_OPTIONS[0].value);

  // 검색창에 입력 시
  const handleSearchTextChange = (e) => {
    setSearchText(e.target.value);
  };

  // 필터 선택 시
  const handleSortByChange = (sortBy) => {
    setSortBy(sortBy);
  };

  return (
    <>
      <SearchInput onChange={handleSearchTextChange} />
      <SortOptionsButton
        selectedValue={sortBy}
        onValueChange={handleSortByChange}
      />
      <LinkCardList searchText={searchText} sortBy={sortBy} />
    </>
  );
}

export default ShopList;
