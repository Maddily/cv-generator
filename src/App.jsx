import { useState, useEffect } from 'react';
import './styles/App.css';
import Form from './components/Form';

function App() {
  const [cvReady, setCvReady] = useState(false);
  const [isEditingGeneralInfo, setIsEditingGeneralInfo] = useState(true);
  const [isEditingEducationalExp, setIsEditingEducationalExp] = useState(true);
  const [isEditingPracticalExp, setIsEditingPracticalExp] = useState(true);

  useEffect(() => {
    if (
      !isEditingGeneralInfo &&
      !isEditingEducationalExp &&
      !isEditingPracticalExp
    ) {
      setCvReady(true);
    } else {
      setCvReady(false);
    }
  }, [setCvReady, isEditingGeneralInfo, isEditingEducationalExp, isEditingPracticalExp]);

  return (
    <>
      <Form
        isEditingGeneralInfo={isEditingGeneralInfo}
        isEditingEducationalExp={isEditingEducationalExp}
        isEditingPracticalExp={isEditingPracticalExp}
        setIsEditingGeneralInfoCaller={(bool) => setIsEditingGeneralInfo(bool)}
        setIsEditingEducationalExpCaller={(bool) =>
          setIsEditingEducationalExp(bool)
        }
        setIsEditingPracticalExpCaller={(bool) =>
          setIsEditingPracticalExp(bool)
        }
      />
    </>
  );
}

export default App;
