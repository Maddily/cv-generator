import Input from "./Input";
import DataField from "./DataField";

export default function EducationalExp({
  isEditingEducationalExp,
  educationalExpHandler,
  educationalExp,
}) {
  if (isEditingEducationalExp) {
    return (
      <div className="experience">
        <Input
          type="text"
          label="school name"
          placeholder="e.g., Harvard University"
          onChange={educationalExpHandler}
          data={educationalExp}
        />
        <Input
          type="text"
          label="title of study"
          placeholder="e.g., B.Sc. Computer Science"
          onChange={educationalExpHandler}
          data={educationalExp}
        />
        <Input
          type="date"
          label="date of study"
          placeholder="e.g., 2018-2022"
          onChange={educationalExpHandler}
          data={educationalExp}
        />
      </div>
    );
  }

  return (
    <div className="experience">
      <DataField label="school name" data={educationalExp.school} />
      <DataField label="title of study" data={educationalExp.title} />
      <DataField label="date of study" data={educationalExp.date} />
    </div>
  );
}
