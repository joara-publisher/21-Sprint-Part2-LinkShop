function SearchInput({ onChange }) {
  return (
    <div>
      <input
        type="text"
        placeholder="샵 이름으로 검색해 보세요."
        onChange={onChange}
      />
    </div>
  );
}

export default SearchInput;
