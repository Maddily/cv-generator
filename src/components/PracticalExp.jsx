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
      label: 'company name',
      placeholder: 'e.g., TechCorp',
      data: practicalExp.company,
    },
    {
      label: 'position title',
      placeholder: 'e.g., Software Engineer',
      data: practicalExp.position,
    },
    { label: 'main responsibilities', data: practicalExp.responsibilities },
    {
      label: 'from',
      placeholder: 'e.g., 2020',
      data: practicalExp.from,
    },
    {
      label: 'to',
      placeholder: 'e.g., 2023',
      data: practicalExp.to,
    },
  ];

  if (isEditingPracticalExp) {
    return (
      <div className="experience" data-index={index}>
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
          <label htmlFor="responsibilities">main responsibilities</label>
          <textarea
            value={practicalExp.responsibilities}
            className="responsibilities"
            name="responsibilities"
            id="responsibilities"
            placeholder="e.g., Developed web apps"
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
                placeholder={inputField.placeholder}
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
    <div className="experience">
      <Icon
        onClick={(e) => practicalExpHandler(e, index, true)}
        className="remove no-print"
        title="Remove position"
        path={mdiMinusBox}
        size={1}
      />
      <p className="from-to">
        {formatDate(inputFields[3].data)} - {formatDate(inputFields[4].data)}
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
