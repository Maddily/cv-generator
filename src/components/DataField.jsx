import '../styles/DataField.css'

/**
 * A component that renders a label and its associated data.
 *
 * @param {string} label - A label for the data.
 * @param {string} data - Data specific to this field.
 * @returns {JSX.Element}
 */
export default function DataField({ label, data }) {
  let points, list;
  if (label.split(' ')[1] === 'responsibilities') {
    points = data.split('\n');
    list = (
      <ul>
        {points.map(point => (
          <li key={point}>{point}</li>
        ))}
      </ul>
    );
  }
  return (
    <div className="data-field">
      <span className={'data' + ' ' + label.split(' ')[0]}>{points ? list : data}</span>
    </div>
  );
}
