/**
 * A component that renders a button.
 *
 * @param {string} name - The text content of the button.
 * @param {string} experience - educational/practical
 * @param {boolean} buttonDisabled - Indicates if the button should be disabled.
 * @param {boolean} filled - Indicates if the fields in the fieldset containing
 * this button are all filled.
 * @param {function(boolean)} setIsEditingCaller - A function that calls
 * `setIsEditing` state setter for the fieldset the button is associated with,
 * to indicate if the fieldset is being edited.
 * @returns {JSX.Element}
 */
export default function Button({
  name,
  experience,
  buttonDisabled,
  filled,
  setIsEditingCaller,
}) {
  const handleButtonClick = (e) => {
    e.preventDefault();

    if (name === 'submit' && filled) {
      setIsEditingCaller(false);
    } else {
      setIsEditingCaller(true);
    }
  };

  return (
    <button
      data-exp={experience}
      className={name + ' no-print'}
      disabled={buttonDisabled}
      onClick={handleButtonClick}
    >
      {name}
    </button>
  );
}
