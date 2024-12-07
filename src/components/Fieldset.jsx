import { useEffect, useState } from 'react';
import Icon from '@mdi/react';
import { mdiPlusBox } from '@mdi/js';
import Button from './Button';
import '../styles/Fieldset.css';

export default function Fieldset({
  legend,
  children,
  filled,
  isEditing,
  setIsEditingCaller,
  addEducationalExpHandler,
  addPracticalExpHandler,
}) {
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

  const displayAddButton = () => {
    if (legend.split(' ')[1] === 'experience') {
      const title =
        legend.split(' ')[0] === 'educational'
          ? 'Add education'
          : 'Add position';

      return (
        <Icon
          onClick={addMoreExperience}
          className="add"
          title={title}
          path={mdiPlusBox}
          size={1}
        />
      );
    }
  };

  /**
   * Clicking 'add' button forces a click on edit button
   * and adds another experience component.
   */
  const addMoreExperience = () => {
    let editButton;

    if (legend.split(' ')[0] === 'educational') {
      editButton = document.querySelector('[data-exp="educational"]');

      addEducationalExpHandler({
        school: '',
        title: '',
        date: '',
      });
    } else {
      editButton = document.querySelector('[data-exp="practical"]');

      addPracticalExpHandler({
        company: '',
        position: '',
        responsibilities: '',
        from: '',
        to: '',
      });
    }

    editButton.click();
  };

  return (
    <fieldset>
      <legend>{legend}</legend>
      <div className="fields">{children}</div>
      {displayAddButton()}
      <div className="buttons">
        <Button
          name="edit"
          experience={legend.split(' ')[0]}
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
