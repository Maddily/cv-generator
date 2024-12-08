import '../styles/DataField.css'

/**
 * A component that renders a label and its associated data.
 *
 * @param {string} label - A label for the data.
 * @param {string} data - Data specific to this field.
 * @returns {JSX.Element}
 */
export default function DataField({ label, data }) {
  return (
    <div className="data-field">
      <span className="label">{label}:</span>
      <span className="data">{data}</span>
    </div>
  );
}
