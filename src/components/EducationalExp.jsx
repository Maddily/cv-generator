import Input from './Input';
import DataField from './DataField';
import Icon from '@mdi/react';
import { mdiMinusBox } from '@mdi/js';

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
      type: 'date',
      label: 'date of study',
      placeholder: 'e.g., 2018-2022',
      data: educationalExp.date,
    },
  ];

  if (isEditingEducationalExp) {
    return (
      <div className="experience" data-index={index}>
        <Icon
          onClick={(e) => educationalExpHandler(e, index, true)}
          className="remove no-print"
          title="Remove education"
          path={mdiMinusBox}
          size={1}
        />
        {inputFields.map((input) => (
          <Input
            key={input.label}
            type={input.type}
            label={input.label}
            placeholder={input.placeholder}
            onChange={(e) => educationalExpHandler(e, index)}
            data={educationalExp}
          />
        ))}
      </div>
    );
  }

  return (
    <div className="experience">
      <Icon
        onClick={(e) => educationalExpHandler(e, index, true)}
        className="remove no-print"
        title="Remove education"
        path={mdiMinusBox}
        size={1}
      />
      {inputFields.map((inputField) => (
        <DataField
          key={inputField.label}
          label={inputField.label}
          data={inputField.data}
        />
      ))}
    </div>
  );
}
