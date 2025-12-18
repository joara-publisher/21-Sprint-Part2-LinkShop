function FilterButton ({ orderValue, hasSelectedFilter, onClick }) {
  const ORDER_LABEL = {
    recent: '최신순',
    likes: '좋아요순',
    productsCount: '등록된 상품순',
  };

  return (
    <>
      <button onClick={onClick}>{hasSelectedFilter ? ORDER_LABEL[orderValue] : '상세필터'}</button>
    </>
  )
}

export default FilterButton;