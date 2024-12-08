import Input from './Input';
import DataField from './DataField';
import Icon from '@mdi/react';
import { mdiMinusBox } from '@mdi/js';

export default function EducationalExp({
  index,
  isEditingEducationalExp,
  educationalExpHandler,
  educationalExp,
}) {
  const inputs = [
    {
      type: 'text',
      label: 'school name',
      placeholder: 'e.g., Harvard University',
    },
    {
      type: 'text',
      label: 'title of study',
      placeholder: 'e.g., B.Sc. Computer Science',
    },
    { type: 'date', label: 'date of study', placeholder: 'e.g., 2018-2022' },
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
        {inputs.map((input) => (
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
      <DataField label="school name" data={educationalExp.school} />
      <DataField label="title of study" data={educationalExp.title} />
      <DataField label="date of study" data={educationalExp.date} />
    </div>
  );
}
