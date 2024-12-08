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
  const dataFields = [
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
        {dataFields.map((dataField) => (
          <Input
            key={dataField.label}
            type={dataField.type}
            label={dataField.label}
            placeholder={dataField.placeholder}
            onChange={generalInfoHandler}
            data={generalInfo}
          />
        ))}
      </div>
    );
  }

  return (
    <div className="general">
      {dataFields.map((dataField) => (
        <DataField
          key={dataField.label}
          label={dataField.label}
          data={dataField.data}
        />
      ))}
    </div>
  );
}
