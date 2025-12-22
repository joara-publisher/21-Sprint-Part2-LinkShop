import { useState } from "react";
import {
  SORTING_LABEL_MAP,
  SORTING_OPTIONS,
} from "../constants/sortingOptions";
import Modal from "../components/Modal";

function SortOptionsButton({ selectedValue, onValueChange }) {
  const [isFilterModalOpen, setIsFilterModalOpen] = useState(false);
  const [hasTouched, setHasTouched] = useState(false);

  const handleSortSelect = (value) => {
    if (!hasTouched) {
      setHasTouched(true);
    }
    onValueChange(value);
    setIsFilterModalOpen(false);
  };

  const toggleSortOptionsModal = () => {
    setIsFilterModalOpen((prev) => !prev);
  };

  return (
    <>
      <button onClick={toggleSortOptionsModal}>
        {hasTouched ? SORTING_LABEL_MAP[selectedValue] : "상세필터"}
      </button>
      <Modal isOpen={isFilterModalOpen}>
        <h3>정렬</h3>
        <button onClick={toggleSortOptionsModal}>X</button>
        <ul>
          {SORTING_OPTIONS.map(({ label, value }) => (
            <li
              key={value}
              className={selectedValue === value ? "active" : ""}
              onClick={() => handleSortSelect(value)}
            >
              {label}
            </li>
          ))}
        </ul>
      </Modal>
    </>
  );
}

export default SortOptionsButton;
