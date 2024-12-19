import { useState, useEffect } from 'react';
import './styles/App.css';
import logo from './assets/images/logo.png';
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
    const header = document.querySelector('header');
    header.style.display = 'none';

    const noPrint = document.querySelectorAll('.no-print');
    noPrint.forEach((element) => (element.style.display = 'none'));

    const experiences = document.querySelectorAll('.experience');
    experiences.forEach((experience) => (experience.style.marginTop = '-30px'));

    const fields = document.querySelectorAll('.fields');
    fields.forEach((fieldsElement) => (fieldsElement.style.gap = '8px'));

    window.print();

    header.style.display = 'flex';
    noPrint.forEach((element) => (element.style.display = 'block'));
    experiences.forEach((experience) => (experience.style.marginTop = '0'));
    fields.forEach((fieldsElement) => (fieldsElement.style.gap = '0'));
  };

  return (
    <>
      <header>
        <div className="logo-container">
          <img className="logo" src={logo} alt="CV icon" />
          <h1>CV Architect</h1>
        </div>
        <a className="generate-cv-link" href="#generate-cv">
          Generate CV
        </a>
      </header>
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
        id="generate-cv"
        disabled={!cvReady}
        onClick={handlePrinting}
        className="generate-cv no-print"
      >
        Generate CV
      </button>
      <footer className="no-print">
        <p>
          Licensed under{' '}
          <a
            href="https://creativecommons.org/licenses/by-nc-nd/4.0/"
            target="_blank"
          >
            CC BY-NC-ND 4.0
          </a>
        </p>
        <p>
          View the source code on{' '}
          <a href="https://github.com/Maddily/cv-generator" target="_blank">
            GitHub
          </a>
        </p>
        <p>
          Favicon&nbsp;
          <a
            href="https://www.flaticon.com/free-icons/cv"
            title="CV icons"
            target="_blank"
          >
            CV icon created by Freepik - Flaticon
          </a>
        </p>
      </footer>
    </>
  );
}

export default App;
