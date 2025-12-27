import { useEffect, useRef, useState } from "react";

function FormField({ id,name, label, type, placeholder, value, onChange }) {
  const fileInputRef = useRef(null);
  const [fileName, setFileName] = useState("");
  
  useEffect(() => {
    // 부모로부터 전달된 value가 File인 경우 파일명 표시
    if (type === "file") {
      if (value && typeof value === "object" && value.name) {
        setFileName(value.name);
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
      <label htmlFor={name}>{label}</label>
      
      {type === "file" ? (
        <>
          <input
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
        </>
      ) : (
        <input
          id={inputId}
          name={name}
          type={type}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
        />
      )}
    </div>
  );
}

export default FormField;