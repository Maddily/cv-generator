import '../styles/Input.css';

export default function Input({
  type,
  label,
  placeholder,
  onChange,
  data
}) {
  const name = label.split(' ')[0];

  return (
    <div className="field">
      <label htmlFor={name}>{label}</label>
      <input
        value={data[name]}
        id={name}
        type={type}
        name={name}
        placeholder={placeholder}
        onChange={onChange}
      />
    </div>
  );
}
