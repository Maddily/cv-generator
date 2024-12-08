// `filled` is a boolean that indicates if all fields in this fieldset are filled
export default function Button({
  name,
  experience,
  buttonDisabled,
  filled,
  setIsEditingCaller,
}) {
  const onClick = (e) => {
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
      onClick={onClick}
    >
      {name}
    </button>
  );
}
