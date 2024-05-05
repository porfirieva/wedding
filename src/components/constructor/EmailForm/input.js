import s from "./style.module.scss";

const Input = ({
  title,
  value,
  onChange,
  placeholder,
  type,
  name,
  customRref,
  error,
  errorText,
}) => {
  return (
    <div>
      <label>{title}</label>
      {customRref ? (
        <input
          type={type}
          name={name}
          required
          placeholder={placeholder}
          ref={customRref}
          onChange={onChange}
        />
      ) : (
        <input
          type={type}
          name={name}
          required
          placeholder={placeholder}
          value={value}
          onChange={onChange}
        />
      )}
      {error && <span className={s.error}>{errorText}</span>}
    </div>
  );
};

export default Input;
