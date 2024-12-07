import Input from './Input';
import DataField from './DataField';
import '../styles/PracticalExp.css';

export default function PracticalExp({
  index,
  isEditingPracticalExp,
  practicalExpHandler,
  practicalExp,
}) {
  if (isEditingPracticalExp) {
    return (
      <div className="experience" data-index={index}>
        <Input
          type="text"
          label="company name"
          placeholder="e.g., TechCorp"
          onChange={(e) => practicalExpHandler(e, index)}
          data={practicalExp}
        />
        <Input
          type="text"
          label="position title"
          placeholder="e.g., Software Engineer"
          onChange={(e) => practicalExpHandler(e, index)}
          data={practicalExp}
        />
        <div className="field">
          <label htmlFor="responsibilities">main responsibilities</label>
          <textarea
            value={practicalExp.responsibilities}
            className="responsibilities"
            name="responsibilities"
            id="responsibilities"
            placeholder="e.g., Developed web apps"
            onChange={(e) => practicalExpHandler(e, index)}
          ></textarea>
        </div>
        <Input
          type="number"
          label="from"
          placeholder="e.g., 2020"
          onChange={(e) => practicalExpHandler(e, index)}
          data={practicalExp}
        />
        <Input
          type="number"
          label="to"
          placeholder="e.g., 2023"
          onChange={(e) => practicalExpHandler(e, index)}
          data={practicalExp}
        />
      </div>
    );
  }

  return (
    <div className="experience">
      <DataField label="company name" data={practicalExp.company} />
      <DataField label="position title" data={practicalExp.position} />
      <DataField
        label="main responsibilities"
        data={practicalExp.responsibilities}
      />
      <DataField label="from" data={practicalExp.from} />
      <DataField label="to" data={practicalExp.to} />
    </div>
  );
}
