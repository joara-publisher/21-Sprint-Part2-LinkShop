import { useState } from "react";
import SearchInput from "../components/SearchInput";
import FilterButton from "../components/FilterButton";
import LinkCardList from "../components/LinkCardList";
import Modal from "../components/Modal";

function List () {
  const [keyword, setKeyword] = useState(''); // 검색창에 입력한 검색어
  const [orderValue, setOrderValue] = useState('recent'); // 정렬 기준 값 (recent, likes, productsCount)
  const [hasSelectedFilter, setHasSelectedFilter] = useState(false); // 필터를 한 번이라도 선택했는지 여부 (버튼 텍스트 변경에 필요)
  const [isFilterModalOpen, setIsFilterModalOpen] = useState(false); // 필터 모달 열기 여부
  
  // 검색창에 입력 시
  const handleKeywordChange = (e) => {
    setKeyword(e.target.value);
  }
  
  // 필터 선택 시
  const handleFilterChange = (order) => {
    setOrderValue(order);
    setHasSelectedFilter(true);
    setIsFilterModalOpen(false);
  }
  
  return (
    <>
      <SearchInput onChange={handleKeywordChange} />
      <FilterButton orderValue={orderValue} hasSelectedFilter={hasSelectedFilter} onClick={() => setIsFilterModalOpen(true)} />
      <Modal isOpen={isFilterModalOpen}>
        <h3>정렬</h3>
        <button onClick={() => setIsFilterModalOpen(false)}>X</button>
        <ul>
          <li className={orderValue === 'recent' ? 'active' : ''} onClick={() => handleFilterChange('recent')}>최신순</li>
          <li className={orderValue === 'likes' ? 'active' : ''} onClick={() => handleFilterChange('likes')}>좋아요순</li>
          <li className={orderValue === 'productsCount' ? 'active' : ''} onClick={() => handleFilterChange('productsCount')}>등록된 상품순</li>
        </ul>
      </Modal>
      <LinkCardList keyword={keyword} orderBy={orderValue}/>
    </>
  )
}

export default List;