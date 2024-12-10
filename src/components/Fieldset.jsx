import { useEffect, useState } from 'react';
import Icon from '@mdi/react';
import { mdiPlusBox } from '@mdi/js';
import Button from './Button';
import '../styles/Fieldset.css';

/**
 * A component to render a fieldset.
 *
 * @param {string} legend - The legend of the fieldset.
 * @param {ReactNode} children - input/data fields to be rendered.
 * @param {boolean} filled - Indicates whether all fields in this fieldset
 * are filled.
 * @param {boolean} isEditing - Indicates whether this fieldset is in editing mode.
 * @param {function(boolean)} setIsEditingCaller - Calls a state setter to update the mode
 * of the fieldset (editing or not).
 * @param {function(Object)} addEducationalExpHandler - Handles adding a new block
 * of educational experience. It receives an experience object as argument.
 * @param {function(Object)} addPracticalExpHandler - Handles adding a new block
 * of practical experience. It receives an experience object as argument.
 * @returns {JSX.Element}
 */
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

  // I'm using Effect hook to avoid infinite rendering.
  useEffect(() => {
    /**
     * Disable/enable edit/submit buttons based on whether
     * the fieldset is in editing mode and if the fields are filled.
     */
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

  /**
   * Displays an svg button to add a new block of experience
   * (EducationalExp/PracticalExp component instance)
   * and gives it an appropriate title.
   *
   * @returns {JSX.Element}
   */
  const displayAddButton = () => {
    if (legend.split(' ')[1] === 'experience') {
      const title =
        legend.split(' ')[0] === 'educational'
          ? 'Add education'
          : 'Add position';

      return (
        <Icon
          onClick={addMoreExperience}
          className="add no-print"
          title={title}
          path={mdiPlusBox}
          size={1}
        />
      );
    }
  };

  /**
   * Handles adding a new block of experience
   * (EducationalExp/PracticalExp component instance).
   * Clicking 'add' button forces a click on edit button,
   * switching the fieldset to editing mode to let users
   * start filling in the new experience data.
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
      <legend className={legend.split(' ')[0] === 'contact' ? 'contact' : undefined}><span className='first-letter'>{legend[0]}</span><span className='remaining-letters'>{legend.slice(1)}</span></legend>
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
