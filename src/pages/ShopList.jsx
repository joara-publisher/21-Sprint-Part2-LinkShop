import { useState } from "react";
import SearchInput from "../components/SearchInput";
import SortOptionsButton from "../components/SortOptionsButton";
import LinkCardList from "../components/LinkCardList";
import { SORTING_OPTIONS } from "../constants/sortingOptions";
import {
  PageContainer,
  SearchInputWrapper,
  SortOptionsButtonWrapper,
} from "../styles/ShopListPageStyles";

function ShopList() {
  const [searchText, setSearchText] = useState("");
  const [sortBy, setSortBy] = useState(SORTING_OPTIONS[0].value);

  const handleSearchTextChange = (e) => {
    setSearchText(e.target.value);
  };

  const handleSortByChange = (sortBy) => {
    setSortBy(sortBy);
  };

  return (
    <PageContainer>
      <SearchInputWrapper>
        <SearchInput onChange={handleSearchTextChange} />
      </SearchInputWrapper>
      <SortOptionsButtonWrapper>
        <SortOptionsButton
          selectedValue={sortBy}
          onValueChange={handleSortByChange}
        />
      </SortOptionsButtonWrapper>
      <LinkCardList searchText={searchText} sortBy={sortBy} />
    </PageContainer>
  );
}

export default ShopList;
