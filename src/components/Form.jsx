import { useState } from 'react';
import Fieldset from './Fieldset';
import GeneralInfo from './GeneralInfo';
import EducationalExp from './EducationalExp';
import PracticalExp from './PracticalExp';

export default function Form({
  isEditingGeneralInfo,
  isEditingEducationalExp,
  isEditingPracticalExp,
  setIsEditingGeneralInfoCaller,
  setIsEditingEducationalExpCaller,
  setIsEditingPracticalExpCaller
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
      date: '',
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

  const handleGeneralInfoChange = (e) => {
    const key = e.target.name;
    setgeneralInfo({ ...generalInfo, [key]: e.target.value });
  };

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
        legend="educational experience"
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
        legend="practical experience"
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
