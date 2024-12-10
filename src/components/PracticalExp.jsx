import Input from './Input';
import DataField from './DataField';
import Icon from '@mdi/react';
import { mdiMinusBox } from '@mdi/js';
import { formatDate } from '../utils';
import '../styles/PracticalExp.css';

/**
 * A component to render practical experience.
 * If the fieldset is in editing mode, input elements are rendered.
 * If not, the data is displayed normally.
 *
 * @param {number} index - The index of the given practical experience.
 * @param {boolean} isEditingPracticalExp - Indicates whether the fieldset is in editing mode.
 * @param {function(event, number, boolean)} practicalExpHandler - A function that calls
 * another function to handle change in input and experience removal.
 * @param {object} practicalExp - An object representing practical experience.
 * @returns {JSX.Element}
 */
export default function PracticalExp({
  index,
  isEditingPracticalExp,
  practicalExpHandler,
  practicalExp,
}) {
  const inputFields = [
    {
      label: 'position title',
      placeholder: 'e.g., Software Engineer',
      data: practicalExp.position,
    },
    {
      label: 'company name',
      placeholder: 'e.g., TechCorp',
      data: practicalExp.company,
    },
    { label: 'main responsibilities', data: practicalExp.responsibilities },
    {
      label: 'from',
      data: practicalExp.from,
    },
    {
      label: 'to',
      data: practicalExp.to,
    },
  ];

  if (isEditingPracticalExp) {
    const id = `id-${Date.now()}-${Math.random().toString(36).substring(2, 9)}`;

    return (
      <div className="experience experience-editing" data-index={index}>
        <Icon
          onClick={(e) => practicalExpHandler(e, index, true)}
          className="remove no-print"
          title="Remove position"
          path={mdiMinusBox}
          size={1}
        />
        {inputFields.map((inputField, i) => {
          if (i <= 1) {
            return (
              <Input
                key={inputField.label}
                type="text"
                label={inputField.label}
                placeholder={inputField.placeholder}
                onChange={(e) => practicalExpHandler(e, index)}
                data={practicalExp}
              />
            );
          }
        })}
        <div className="field">
          <label htmlFor={id}>main responsibilities</label>
          <textarea
            value={practicalExp.responsibilities}
            className="responsibilities"
            name="responsibilities"
            id={id}
            placeholder="e.g., Developed web apps.&#10;&#10;Note: Separate your responsibilities with newlines to display as bullet points."
            onChange={(e) => practicalExpHandler(e, index)}
            aria-required="true"
            autoComplete="on"
          ></textarea>
        </div>
        {inputFields.map((inputField, i) => {
          if (i > 2) {
            return (
              <Input
                key={inputField.label}
                type="month"
                label={inputField.label}
                onChange={(e) => practicalExpHandler(e, index)}
                data={practicalExp}
              />
            );
          }
        })}
      </div>
    );
  }

  return (
    <div className="experience experience-submitted">
      <Icon
        onClick={(e) => practicalExpHandler(e, index, true)}
        className="remove no-print"
        title="Remove position"
        path={mdiMinusBox}
        size={1}
      />
      <p className="from-to">
        {formatDate(inputFields[3].data)} &mdash;{' '}
        {formatDate(inputFields[4].data)}
      </p>
      {inputFields.map((inputField, i) => {
        if (i < 3) {
          return (
            <DataField
              key={inputField.label}
              label={inputField.label}
              data={inputField.data}
            />
          );
        }
      })}
    </div>
  );
}
