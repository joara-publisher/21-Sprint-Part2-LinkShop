import { useState } from "react";
import SearchInput from "../components/SearchInput";
import FilterButton from "../components/FilterButton";
import LinkCardList from "../components/LinkCardList";
import { SORTING_OPTIONS } from "../constants/sortingOptions";

function ShopList () {
  const [searchText, setSearchText] = useState('');
  const [sortBy, setSortBy] = useState(SORTING_OPTIONS[0].value);

  // 검색창에 입력 시
  const handleKeywordChange = (e) => {
    setSearchText(e.target.value);
  }
  
  // 필터 선택 시
  const handleSortByChange = (sortBy) => {
    setSortBy(sortBy);
  }
  
  return (
    <>
      <SearchInput onChange={handleKeywordChange} />
      <FilterButton sortBy={sortBy} onSortChange={handleSortByChange} />
      <LinkCardList searchText={searchText} sortBy={sortBy}/>
    </>
  )
}

export default ShopList;