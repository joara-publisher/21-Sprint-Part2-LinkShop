import { useState } from "react";
import {
  SORTING_LABEL_MAP,
  SORTING_OPTIONS,
} from "../constants/sortingOptions";
import Modal from "../components/Modal";
import {
  SheetCloseButton,
  SheetSortOption,
  SheetTitle,
} from "../styles/SortSheetStyles";
import { SortButton } from "../styles/SortOptionsButtonStyles";

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
      <SortButton onClick={toggleSortOptionsModal}>
        {hasTouched ? SORTING_LABEL_MAP[selectedValue] : "상세필터"}
      </SortButton>
      <Modal isOpen={isFilterModalOpen} backdrop={true} variant="sheet">
        <SheetTitle>정렬</SheetTitle>
        <SheetCloseButton onClick={toggleSortOptionsModal}></SheetCloseButton>
        <ul>
          {SORTING_OPTIONS.map(({ label, value }) => (
            <SheetSortOption
              key={value}
              className={selectedValue === value ? "active" : ""}
              onClick={() => handleSortSelect(value)}
            >
              {label}
            </SheetSortOption>
          ))}
        </ul>
      </Modal>
    </>
  );
}

export default SortOptionsButton;
