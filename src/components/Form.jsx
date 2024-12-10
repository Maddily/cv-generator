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
    name: 'Jake Ryan',
    email: 'jake@su.edu',
    phone: '123-456-7890',
  });
  const [educationalExp, setEducationalExp] = useState([
    {
      school: 'Southwestern University',
      title: 'Bachelor of Arts in Computer Science, Minor in Business',
      from: '2018-08',
      to: '2021-05',
    },
    {
      school: 'Blinn College',
      title: "Associate's in Liberal Arts",
      from: '2014-08',
      to: '2018-05',
    }
  ]);
  const [practicalExp, setPracticalExp] = useState([
    {
      company: 'Texas A&M University',
      position: 'Undergraduate Research Assistant',
      responsibilities: 'Developed a REST API using FastAPI and PostgreSQL to store data from learning management systems\nDeveloped a full-stack web application using Flask, React, PostgreSQL and Docker to analyze GitHub data\nExplored ways to visualize GitHub collaboration in a classroom setting',
      from: '2020-06',
      to: '2024-12',
    },
    {
      company: 'Southwestern University',
      position: 'Information Technology Support Specialist',
      responsibilities: 'Communicate with managers to set up campus computers used on campus\nAssess and troubleshoot computer problems brought by students, faculty and staff\nMaintain upkeep of computers, classroom equipment, and 200 printers across campus',
      from: '2018-09',
      to: '2024-12',
    },
    {
      company: 'Southwestern University',
      position: 'Artificial Intelligence Research Assistant',
      responsibilities: 'Explored methods to generate video game dungeons based off of The Legend of Zelda\nDeveloped a game in Java to test the generated dungeons\nContributed 50K+ lines of code to an established codebase via Git\nConducted a human subject study to determine which video game dungeon generation technique is enjoyable\nWrote an 8-page paper and gave multiple presentations on-campus\nPresented virtually to the World Conference on Computational Intelligence',
      from: '2019-05',
      to: '2019-07',
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

  return (
    <form>
      <Fieldset
        legend="general information"
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
