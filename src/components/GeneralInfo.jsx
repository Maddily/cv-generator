import Input from './Input';
import DataField from './DataField';

/**
 * A component to render general information.
 * If the fieldset is in editing mode, input elements are rendered.
 * If not, the data is displayed normally.
 *
 * @param {boolean} isEditingGeneralInfo - Indicates if general info fieldset
 * is in editing mode.
 * @param {function(ChangeEvent)} generalInfoHandler - Updates generalInfo state
 * on input change.
 * @param {object} generalInfo - Data for the general information section.
 * @returns {JSX.Element}
 */
export default function GeneralInfo({
  isEditingGeneralInfo,
  generalInfoHandler,
  generalInfo,
}) {
  const inputFields = [
    {
      type: 'text',
      label: 'name',
      placeholder: 'Your name here',
      data: generalInfo.name,
    },
    {
      type: 'email',
      label: 'email address',
      placeholder: 'someone@example.com',
      data: generalInfo.email,
    },
    {
      type: 'tel',
      label: 'phone number',
      placeholder: 'Your phone number',
      data: generalInfo.phone,
    },
  ];

  if (isEditingGeneralInfo) {
    return (
      <div className="general">
        {inputFields.map((inputField) => (
          <Input
            key={inputField.label}
            type={inputField.type}
            label={inputField.label}
            placeholder={inputField.placeholder}
            onChange={generalInfoHandler}
            data={generalInfo}
          />
        ))}
      </div>
    );
  }

  return (
    <div className="general">
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
