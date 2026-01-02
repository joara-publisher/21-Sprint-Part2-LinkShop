import { useEffect, useRef, useState } from "react";
import { FormFieldBlock, FormFieldLabel, StyledInput } from "../styles/FormFieldStyles";

function FormField({ id, name, label, type, placeholder, value, onChange }) {
  const fileInputRef = useRef(null);
  const [fileName, setFileName] = useState("");
  
  useEffect(() => {
    if (type === "file") {
      if (value && typeof value === "object" && value.name) {
        setFileName(value.name);
      } else {
        setFileName("");
      }
    }
  }, [type, value]);

  const handleButtonClick = () => {
    fileInputRef.current?.click();
  };

  const handleFileChange = (e) => {
    const file = e.target.files && e.target.files[0] ? e.target.files[0] : null;
    setFileName(file ? file.name : "");
    if (onChange) onChange(e);
  };
  
  const inputId = id || name;

  return (
    <div>
      
        <FormFieldLabel htmlFor={name}>{label}</FormFieldLabel>

      {type === "file" ? (
        <FormFieldBlock>
          <StyledInput
            id={inputId}
            name={name}
            type="file"
            style={{ display: "none" }}
            ref={fileInputRef}
            onChange={handleFileChange}
          />
          <button type="button" aria-label={`${label} 파일 첨부`} onClick={handleButtonClick}>
            파일 첨부
          </button>
          {fileName && <span>{fileName}</span>}
        </FormFieldBlock>
      ) : (
        <FormFieldBlock>
          <StyledInput
            id={inputId}
            name={name}
            type={type}
            placeholder={placeholder}
            value={value}
            onChange={onChange}
          />
        </FormFieldBlock>
      )}
    </div>
  );
}

export default FormField;