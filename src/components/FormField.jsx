function FormField({ label, type, placeholder, value, onChange }) { 
  return (
    <div >
      <label>{label}</label>
      <input
        type={type}
        placeholder={placeholder}
        value={value} // 나중에 필요한 작업을 위해 추가
        onChange={onChange} // 나중에 필요한 작업을 위해 추가
      />
    </div>
  );
}

export default FormField;