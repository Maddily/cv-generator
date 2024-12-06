import { useEffect, useState } from 'react';
import Button from './Button';
import '../styles/Fieldset.css';

export default function Fieldset({ legend, children, filled, isEditing, setIsEditingCaller }) {
  const [editButtonDisabled, setEditButtonDisabled] = useState(true);
  const [submitButtonDisabled, setSubmitButtonDisabled] = useState(true);

  useEffect(() => {
    if (isEditing) {
      setEditButtonDisabled(true);
      if (filled) {
        setSubmitButtonDisabled(false);
      } else {
        setSubmitButtonDisabled(true);
      }
    } else {
      setEditButtonDisabled(false);
      setSubmitButtonDisabled(true);
    }
  }, [isEditing, filled]);

  return (
    <fieldset>
      <legend>{legend}</legend>
      <div className="fields">{children}</div>
      <div className="buttons">
        <Button
          name="edit"
          buttonDisabled={editButtonDisabled}
          filled={filled}
          isEditing={isEditing}
          setIsEditingCaller={setIsEditingCaller}
        />
        <Button
          name="submit"
          buttonDisabled={submitButtonDisabled}
          filled={filled}
          isEditing={isEditing}
          setIsEditingCaller={setIsEditingCaller}
        />
      </div>
    </fieldset>
  );
}
