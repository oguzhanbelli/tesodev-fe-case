const Input = ({ className, onClick, placeholder, value, onChange }) => {
  return (
    <>
      <input
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            onClick();
          }
        }}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className={className || "input"}
      />
    </>
  );
};
