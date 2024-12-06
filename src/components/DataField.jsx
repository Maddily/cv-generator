import '../styles/DataField.css'

export default function DataField({ label, data }) {
  return (
    <div className="data-field">
      <span className="label">{label}:</span>
      <span className="data">{data}</span>
    </div>
  );
}
