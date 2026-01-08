import { useEffect, useState } from "react";
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
  const [inputValue, setInputValue] = useState("");
  const [searchText, setSearchText] = useState("");
  const [sortBy, setSortBy] = useState(SORTING_OPTIONS[0].value);

  const handleSortByChange = (sortBy) => {
    setSortBy(sortBy);
  };

  useEffect(() => {
    if (!inputValue.trim()) {
      setSearchText("");
      return;
    }

    const isIncomplete = /[ㄱ-ㅎㅏ-ㅣ]/.test(inputValue);
    const isTooShort = inputValue.length < 2;

    if (isIncomplete || isTooShort) {
      return;
    }
    const timer = setTimeout(() => {
      setSearchText(inputValue);
    }, 400);

    return () => clearTimeout(timer);
  }, [inputValue]);

  return (
    <PageContainer>
      <SearchInputWrapper>
        <SearchInput onChange={(e) => setInputValue(e.target.value)} />
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
