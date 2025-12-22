import { useState } from "react";
import { SORTING_LABEL_MAP, SORTING_OPTIONS } from "../constants/sortingOptions";
import Modal from "../components/Modal";

function FilterButton ({ sortBy, onSortChange }) {  
  const [isFilterModalOpen, setIsFilterModalOpen] = useState(false);
  const [hasTouched, setHasTouched] = useState(false);
 
  const handleSortSelect = (value) => {
    if (!hasTouched) {
    	setHasTouched(true);
    }
    onSortChange(value);
    setIsFilterModalOpen(false);
  }
  
  const toggleFilterModal = () => {
    setIsFilterModalOpen(prev => !prev);
  }
  
  return (
    <>
      <button onClick={toggleFilterModal}>{hasTouched ? SORTING_LABEL_MAP[sortBy] : '상세필터'}</button>
      <Modal isOpen={isFilterModalOpen}>
        <h3>정렬</h3>
        <button onClick={toggleFilterModal}>X</button>
        <ul>
          {SORTING_OPTIONS.map(({ label, value }) => (
            <li
              key={value}
              className={sortBy === value ? "active" : ""}
              onClick={() => handleSortSelect(value)}
            >
              {label}
            </li>
          ))}
        </ul>
      </Modal>
    </>
  )
}

export default FilterButton;