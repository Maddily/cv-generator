import Input from './Input';
import DataField from './DataField';
import Icon from '@mdi/react';
import { mdiMinusBox } from '@mdi/js';
import { formatDate } from '../utils';

/**
 * A component to render educational experience.
 * If the fieldset is in editing mode, input elements are rendered.
 * If not, the data is displayed normally.
 *
 * @param {number} index - The index of the given educational experience.
 * @param {boolean} isEditingEducationalExp - Indicates whether the fieldset is in editing mode.
 * @param {function(event, number, boolean)} educationalExpHandler - A function that calls
 * another function to handle change in input and experience removal.
 * @param {object} educationalExp - An object representing educational experience.
 * @returns {JSX.Element}
 */
export default function EducationalExp({
  index,
  isEditingEducationalExp,
  educationalExpHandler,
  educationalExp,
}) {
  const inputFields = [
    {
      type: 'text',
      label: 'school name',
      placeholder: 'e.g., Harvard University',
      data: educationalExp.school,
    },
    {
      type: 'text',
      label: 'title of study',
      placeholder: 'e.g., B.Sc. Computer Science',
      data: educationalExp.title,
    },
    {
      label: 'from',
      data: educationalExp.from,
    },
    {
      label: 'to',
      data: educationalExp.to,
    },
  ];

  if (isEditingEducationalExp) {
    return (
      <div className="experience experience-editing" data-index={index}>
        <Icon
          onClick={(e) => educationalExpHandler(e, index, true)}
          className="remove no-print"
          title="Remove education"
          path={mdiMinusBox}
          size={1}
        />
        {inputFields.map((inputField, i) => {
          if (i <= 1) {
            return (
              <Input
                key={inputField.label}
                type={inputField.type}
                label={inputField.label}
                placeholder={inputField.placeholder}
                onChange={(e) => educationalExpHandler(e, index)}
                data={educationalExp}
              />
            );
          }
        })}
        {inputFields.map((inputField, i) => {
          if (i > 1) {
            return (
              <Input
                key={inputField.label}
                type="month"
                label={inputField.label}
                onChange={(e) => educationalExpHandler(e, index)}
                data={educationalExp}
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
        onClick={(e) => educationalExpHandler(e, index, true)}
        className="remove no-print"
        title="Remove education"
        path={mdiMinusBox}
        size={1}
      />
      <p className="from-to">
        {formatDate(inputFields[2].data)} &mdash;{' '}
        {formatDate(inputFields[3].data)}
      </p>
      {inputFields.map((inputField, i) => {
        if (i < 2) {
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
