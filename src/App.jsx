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
  }, [
    setCvReady,
    isEditingGeneralInfo,
    isEditingEducationalExp,
    isEditingPracticalExp,
  ]);

  const handlePrinting = () => {
    const noPrint = document.querySelectorAll('.no-print');
    noPrint.forEach((element) => (element.style.display = 'none'));

    window.print();

    noPrint.forEach((element) => (element.style.display = 'block'));
  };

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
      <button
        disabled={!cvReady}
        onClick={handlePrinting}
        className="generate-cv no-print"
      >
        Generate CV
      </button>
      <footer className="no-print">
        <p>
          Licensed under{' '}
          <a href="https://creativecommons.org/licenses/by-nc-nd/4.0/">
            CC BY-NC-ND 4.0
          </a>
        </p>
        <p>
          View the source code on{' '}
          <a href="https://github.com/Maddily/cv-generator">GitHub</a>
        </p>
        <p>
          Favicon&nbsp;
          <a href="https://www.flaticon.com/free-icons/cv" title="CV icons">
            CV icon created by Freepik - Flaticon
          </a>
        </p>
      </footer>
    </>
  );
}

export default App;
