import '../styles/Input.css';

/**
 * A component to render a labeled input wrapped in a container.
 *
 * @param {string} type - The input type (Ex: text).
 * @param {string} label - The label text.
 * @param {string} placeholder - The input element's placeholder text.
 * @param {function(ChangeEvent)} onChange - A handler for input change.
 * @param {object} data - The data associated with the input being rendered.
 * @returns {JSX.Element}
 */
export default function Input({
  type,
  label,
  placeholder,
  onChange,
  data
}) {
  const name = label.split(' ')[0];
  const id = `id-${Date.now()}-${Math.random().toString(36).substring(2, 9)}`;

  return (
    <div className="field">
      <label htmlFor={id}>{label}</label>
      <input
        value={data[name]}
        id={id}
        type={type}
        name={name}
        placeholder={placeholder}
        onChange={onChange}
        aria-required='true'
        autoComplete='on'
      />
    </div>
  );
}
