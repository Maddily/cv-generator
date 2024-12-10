import { useState } from 'react';
import Fieldset from './Fieldset';
import GeneralInfo from './GeneralInfo';
import EducationalExp from './EducationalExp';
import PracticalExp from './PracticalExp';

/**
 * A component that renders a form with three Fieldset instances.
 *
 * @param {boolean} isEditingGeneralInfo - The state of the general info
 * fieldset. It indicates if it's in editing mode.
 * @param {boolean} isEditingEducationalExp - The state of the educational experience
 * fieldset. It indicates if it's in editing mode.
 * @param {boolean} isEditingPracticalExp - The state of the practical experience
 * fieldset. It indicates if it's in editing mode.
 * @param {function(boolean)} setIsEditingGeneralInfoCaller - Calls isEditingGeneralInfo
 * state setter.
 * @param {function(boolean)} setIsEditingEducationalExpCaller - Calls isEditingEducationalExp
 * state setter.
 * @param {function(boolean)} setIsEditingPracticalExpCaller - Calls isEditingPracticalExp
 * state setter.
 * @returns {JSX.Element}
 */
export default function Form({
  isEditingGeneralInfo,
  isEditingEducationalExp,
  isEditingPracticalExp,
  setIsEditingGeneralInfoCaller,
  setIsEditingEducationalExpCaller,
  setIsEditingPracticalExpCaller,
}) {
  const [generalInfo, setgeneralInfo] = useState({
    name: '',
    email: '',
    phone: '',
  });
  const [educationalExp, setEducationalExp] = useState([
    {
      school: '',
      title: '',
      from: '',
      to: '',
    },
  ]);
  const [practicalExp, setPracticalExp] = useState([
    {
      company: '',
      position: '',
      responsibilities: '',
      from: '',
      to: '',
    },
  ]);

  /**
   * Handles updating generalInfo state when the input is changed.
   *
   * @param {ChangeEvent} e - The event fired on input change.
   */
  const handleGeneralInfoChange = (e) => {
    const key = e.target.name;
    setgeneralInfo({ ...generalInfo, [key]: e.target.value });
  };

  /**
   * Removes or updates an experience object using its associated state setter.
   *
   * @param {ChangeEvent} e - The event fired on input change.
   * @param {number} index - The index of an experience object in its state variable.
   * @param {object} expType - The experience object.
   * @param {function(object)} setExpType - A state setter (setEducationalExp or setPracticalExp)
   * @param {boolean} remove - Indicates if the requested change is to remove
   * an experience object.
   */
  const handleExpChange = (e, index, expType, setExpType, remove = false) => {
    if (remove) {
      setExpType(expType.toSpliced(index, 1));
      return;
    }

    const key = e.target.name;
    const newExp = [...expType];
    newExp[index] = {
      ...newExp[index],
      [key]: e.target.value,
    };
    setExpType(newExp);
  };

  const generalInfoFilled = Object.values(generalInfo).every(
    (value) => value !== ''
  );

  const educationalExpFilled = educationalExp.every((exp) => {
    return Object.values(exp).every((value) => value !== '');
  });

  const practicalExpFilled = practicalExp.every((exp) => {
    return Object.values(exp).every((value) => value !== '');
  });

  const generalLegend = document.querySelector('.contact');
  if (generalLegend) {
    if (!isEditingGeneralInfo) {
      generalLegend.style.display = 'none';
    } else {
      generalLegend.style.display = 'block';
    }
  }

  return (
    <form>
      <Fieldset
        legend="contact information"
        filled={generalInfoFilled}
        isEditing={isEditingGeneralInfo}
        setIsEditingCaller={setIsEditingGeneralInfoCaller}
      >
        <GeneralInfo
          isEditingGeneralInfo={isEditingGeneralInfo}
          generalInfoHandler={handleGeneralInfoChange}
          generalInfo={generalInfo}
        />
      </Fieldset>
      <Fieldset
        legend="education"
        filled={educationalExpFilled}
        isEditing={isEditingEducationalExp}
        setIsEditingCaller={setIsEditingEducationalExpCaller}
        addEducationalExpHandler={(exp) =>
          setEducationalExp([...educationalExp, exp])
        }
      >
        {educationalExp.map((exp, i) => {
          return (
            <EducationalExp
              key={i}
              index={i}
              isEditingEducationalExp={isEditingEducationalExp}
              educationalExpHandler={(e, index, remove) =>
                handleExpChange(
                  e,
                  index,
                  educationalExp,
                  setEducationalExp,
                  remove
                )
              }
              educationalExp={exp}
            />
          );
        })}
      </Fieldset>
      <Fieldset
        legend="experience"
        filled={practicalExpFilled}
        isEditing={isEditingPracticalExp}
        setIsEditingCaller={setIsEditingPracticalExpCaller}
        addPracticalExpHandler={(exp) =>
          setPracticalExp([...practicalExp, exp])
        }
      >
        {practicalExp.map((exp, i) => {
          return (
            <PracticalExp
              key={i}
              index={i}
              isEditingPracticalExp={isEditingPracticalExp}
              practicalExpHandler={(e, index, remove) =>
                handleExpChange(e, index, practicalExp, setPracticalExp, remove)
              }
              practicalExp={exp}
            />
          );
        })}
      </Fieldset>
    </form>
  );
}
